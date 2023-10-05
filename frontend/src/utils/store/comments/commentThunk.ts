import { createAsyncThunk } from '@reduxjs/toolkit';
import { getComments } from '../../api';

export const getCommentsThunk = createAsyncThunk('comments/get', () => {
	return getComments();
});
