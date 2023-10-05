import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articles/articleSlice';
import publisherReducer from './publishers/publisherSlice';
import commentSlice from './comments/commentSlice';
export const store = configureStore({
	reducer: {
		article: articleReducer,
		publisher: publisherReducer,
		comment: commentSlice,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
	devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
