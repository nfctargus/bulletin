import { createSelector, createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';
import { Publisher } from '../../types';
import { getPublishersThunk } from './publisherThunk';

export interface PublisherState {
	publishers: Publisher[];
}
const initialState: PublisherState = {
	publishers: [],
};
export const publisherSlice = createSlice({
	name: 'publishers',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getPublishersThunk.fulfilled, (state, action) => {
			state.publishers = action.payload.data;
		});
	},
});
const selectPublishers = (state: RootState) => state.publisher.publishers;
const selectPublisherId = (state: RootState, id: number) => id;
export const selectPublisherById = createSelector([selectPublishers, selectPublisherId], (publishers, publisherId) => {
	return publishers.find((publisher) => publisher.id === publisherId);
});
export const {} = publisherSlice.actions;
export default publisherSlice.reducer;
