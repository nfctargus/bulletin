import axios from 'axios';
import { Article, Publisher } from './types';

const API_URL = 'http://localhost:3001';

const axiosClient = axios.create({ baseURL: API_URL });

export const getPublishers = () => axiosClient.get<Publisher[]>(`${API_URL}/publishers`);

export const getArticles = () => axiosClient.get<Article[]>(`${API_URL}/articles`);
