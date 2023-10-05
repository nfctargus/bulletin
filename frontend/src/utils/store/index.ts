import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articles/articleSlice';
import publisherReducer from './publishers/publisherSlice';
export const store = configureStore({
	reducer: {
		article: articleReducer,
		publisher: publisherReducer,
	},
	devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
