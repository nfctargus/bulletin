import axios from 'axios';
import { Article, Comment, Publisher } from './types';

const API_URL = 'http://localhost:3001';

const axiosClient = axios.create({ baseURL: API_URL });

export const getPublishers = () => axiosClient.get<Publisher[]>(`${API_URL}/publishers`);
export const getPublisherById = (id: number) => axiosClient.get<Publisher>(`${API_URL}/publishers/${id}`);

export const getArticles = () => axiosClient.get<Article[]>(`${API_URL}/articles`);
export const getMustReadArticles = () => axiosClient.get<Article[]>(`${API_URL}/articles-must-read`);
export const getArticlesByCategory = (category: string) => axiosClient.get<Article[]>(`${API_URL}/articles/categories/${category}`);
export const getArticleById = (id: number) => axiosClient.get<Article>(`${API_URL}/articles/${id}`);

export const getComments = () => axiosClient.get<Comment[]>(`${API_URL}/comments`);
