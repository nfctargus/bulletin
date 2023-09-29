'use client';

import { Article, Publisher } from '@/utils/types';
import { css } from '@emotion/css';
import { Suspense, useEffect, useState } from 'react';
import { getArticles, getPublishers } from '@/utils/api';
import StyledLink from './StyledLink';
import { SectionHeaderStyle } from '@/utils/styles';
import { formatDate } from '@/utils/helpers';

type Props = {
	publishers: Publisher[];
	articles: Article[];
	getPublisher: (id: number) => Publisher | undefined;
};
export default function LatestNews({ publishers, articles, getPublisher }: Props) {
	return (
		<div
			className={css`
				display: grid;
				place-items: center;
				width: 100%;
			`}>
			<div
				className={css`
					display: flex;
					justify-content: space-between;
					width: 100%;
					align-items: center;
				`}>
				<SectionHeaderStyle>Latest News</SectionHeaderStyle>
				<StyledLink text="See More" href="/latest" />
			</div>
			<div
				className={css`
					display: flex;
					flex-direction: row;
					gap: 18px;
					margin: 25px 0;
				`}>
				{articles &&
					articles.map((article) => (
						<Suspense fallback={<div>Loading...</div>}>
							<div
								className={css`
									width: 20%;
									display: flex;
									flex-direction: column;
									justify-content: stretch;
									gap: 10px;
								`}
								key={article.id}>
								<img
									className={css`
										border-radius: 5px;
										width: 100%;
										aspect-ratio: 1/1;
										object-fit: cover;
										margin-bottom: 5px;
									`}
									src={article.urlToImage}
									alt={article.title}
								/>
								<small
									className={css`
										font-size: 11px;
										font-weight: 400;
										display: flex;
										align-items: center;
									`}>
									<img
										className={css`
											width: 12px;
											height: 12px;
											border-radius: 50%;
											margin: 0 4px;
										`}
										src={getPublisher(article.publisher)?.logoUrl}
										alt={getPublisher(article.publisher)?.name}
									/>
									{getPublisher(article.publisher)?.name} ● {article.publishedAt && formatDate(article.publishedAt)}
								</small>
								<h3
									className={css`
										font-size: 16px;
										flex-grow: 1;
										color: #1f1f1f;
										font-family: 'Noto Serif', serif;
									`}>
									{article.title.length > 60 ? `${article.title.substring(0, 60)}...` : article.title}
								</h3>
								<p
									className={css`
										font-weight: 400;

										font-size: 13px;
									`}>{`${article.description.substring(0, 125)}...`}</p>
								<small
									className={css`
										font-weight: 400;

										font-size: 11px;
									`}>
									<b
										className={css`
											font-weight: 400;

											color: #e9353b;
										`}>
										{article.category}
									</b>{' '}
									● {article.readTime} min read
								</small>
							</div>
						</Suspense>
					))}
			</div>
		</div>
	);
}
