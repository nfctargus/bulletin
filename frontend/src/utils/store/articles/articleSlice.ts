import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { Article } from '../../types';
import { getArticlesThunk } from './articleThunk';
import { RootState } from '..';

export interface ArticleState {
	articles: Article[];
	loading: boolean;
}
const initialState: ArticleState = {
	articles: [],
	loading: true,
};
export const articleSlice = createSlice({
	name: 'articles',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(getArticlesThunk.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getArticlesThunk.fulfilled, (state, action) => {
			state.articles = action.payload.data;
			state.loading = false;
		});
	},
});
const selectArticles = (state: RootState) => state.article.articles;
const selectArticleId = (state: RootState, id: number) => id;
const selectArticleFlag = (state: RootState, flag: string) => flag;
const selectArticleCategory = (state: RootState, category: string) => category;
export const selectArticleById = createSelector([selectArticles, selectArticleId], (articles, articleId) => {
	return articles.find((article) => article.id === articleId);
});
export const selectArticlesByFlag = createSelector([selectArticles, selectArticleFlag], (articles, flag) => {
	return articles.filter((article) => article.flags.find((f) => f === flag));
});
export const selectArticlesByCategory = createSelector([selectArticles, selectArticleCategory], (articles, category) => {
	return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase());
});
export const {} = articleSlice.actions;
export default articleSlice.reducer;
