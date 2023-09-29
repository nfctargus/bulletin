export type TopArticles = {
	status: string;
	totalResults: number;
	articles: Article[];
};
export type Publisher = {
	id: number;
	handle: string;
	name: string;
	description: string;
	logoUrl: string;
	category: string;
};
export type Article = {
	id: number;
	publisher: number;
	author: string;
	title: string;
	description: string;
	category: string;
	readTime: number;
	urlToImage: string;
	publishedAt: string;
};
