import { createSelector, createSlice } from '@reduxjs/toolkit';
import { Comment } from '../../types';
import { getCommentsThunk } from './commentThunk';
import { RootState } from '..';

export interface CommentState {
	comments: Comment[];
	loading: boolean;
}
const initialState: CommentState = {
	comments: [],
	loading: true,
};
export const commentSlice = createSlice({
	name: 'comments',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getCommentsThunk.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getCommentsThunk.fulfilled, (state, action) => {
			state.comments = action.payload.data;
			state.loading = false;
		});
	},
});
const selectComments = (state: RootState) => state.comment.comments;
const selectCommentId = (state: RootState, id: number) => id;

export const selectCommentByArticleId = createSelector([selectComments, selectCommentId], (comments, articleId) => {
	return comments.filter((comment) => comment.article === articleId);
});
export const {} = commentSlice.actions;
export default commentSlice.reducer;
