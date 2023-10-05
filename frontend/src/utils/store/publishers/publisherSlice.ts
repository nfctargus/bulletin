import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { Publisher } from '../../types';
import { getPublishersThunk } from './publisherThunk';

export interface PublisherState {
	publishers: Publisher[];
	loading: boolean;
}
const initialState: PublisherState = {
	publishers: [],
	loading: true,
};
export const publisherSlice = createSlice({
	name: 'publishers',
	initialState,
	reducers: {
		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addCase(getPublishersThunk.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(getPublishersThunk.fulfilled, (state, action) => {
			state.publishers = action.payload.data;
			state.loading = false;
		});
	},
});
const selectPublishers = (state: RootState) => state.publisher.publishers;
const selectPublisherId = (state: RootState, id: number) => id;
export const selectPublisherById = createSelector([selectPublishers, selectPublisherId], (publishers, publisherId) => {
	return publishers.find((publisher) => publisher.id === publisherId);
});
export const { setLoading } = publisherSlice.actions;
export default publisherSlice.reducer;
