import express from 'express';
import { publishers } from './data/publishers.js';
import { articles } from './data/articles.js';
import { comments } from './data/comments.js';
import cors from 'cors';

const app = express();

const port = 3001;

app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:3000'],
	})
);
app.get('/publishers', (req, res) => {
	res.send(publishers);
});
app.get('/comments', (req, res) => {
	res.send(comments);
});
app.get('/publishers/:id', (req, res) => {
	const { id } = req.params;
	const publisher = publishers.find((p) => p.id === parseInt(id));
	res.send(publisher);
});
app.get('/articles', (req, res) => {
	res.send(articles);
});
app.get('/articles/:id', (req, res) => {
	const { id } = req.params;
	const article = articles.find((a) => a.id === parseInt(id));
	res.send(article);
});
app.get('/articles/categories/:category', (req, res) => {
	const { category } = req.params;
	const article = articles.filter((article) => article.category.toLowerCase() === category.toLowerCase());
	res.send(article);
});
app.get('/articles-must-read', (req, res) => {
	const mustRead = articles.filter((article) => article.flags.find((f) => f === 'must-read'));
	res.send(mustRead);
});

app.listen(port, () => {
	console.log('Backend running on http://localhost:' + port);
});
