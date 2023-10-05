import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticles, getArticleById } from '../../api';

export const getArticlesThunk = createAsyncThunk('articles/get', () => {
	return getArticles();
});
