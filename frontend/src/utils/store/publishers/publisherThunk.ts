import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPublishers } from '../../api';

export const getPublishersThunk = createAsyncThunk('publishers/get', () => {
	return getPublishers();
});
