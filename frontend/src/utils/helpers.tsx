import { format, differenceInHours } from 'date-fns';
import formatRelative from 'date-fns/format';
import { ArticleSection, Intention } from './types';
import { ArticleSectionImageStyle, ArticleSectionStyle, QuoteContainerStyle } from './styles';
import { Link } from 'react-router-dom';

export const formatDate = (date: string) => {
	var oneDayFromNow = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;
	const difference = differenceInHours(oneDayFromNow, Date.parse(date));
	if (difference <= 1) {
		return <>just now</>;
	} else if (difference <= 24) {
		return <>{format(new Date(), "H 'hours ago'")}</>;
	} else return <>{formatRelative(new Date(date), 'MMM Mo, yyyy')}</>;
};
export const truncateArticleText = (desc: string, length: number) => {
	return desc.length > length ? `${desc.substring(0, length)}...` : desc;
};
const formatIntentionKind = (intention: Intention, splitEnd: number, text: string) => {
	switch (intention.kind) {
		case 'important': {
			return <strong>{text?.slice(intention.index, splitEnd)}</strong>;
		}
		case 'emphasized': {
			return <em>{text?.slice(intention.index, splitEnd)}</em>;
		}
		case 'link': {
			return <Link to={intention.link!}>{text?.slice(intention.index, splitEnd)}</Link>;
		}
		default: {
			return <>{text?.slice(intention.index, splitEnd)}</>;
		}
	}
};
const formatIntention = (intentions: Intention[], text: string) => {
	var int = [...intentions];
	var sorted = int.sort((a: Intention, b: Intention) => a.index - b.index);
	const styledIntention = sorted.map((intention, index, elements) => {
		let splitEnd = intention.index + intention.length;
		var next = elements[index + 1];
		return (
			<>
				{index === 0 && text!.slice(0, intention.index)}
				{intention.kind === 'emphasized' ? <em>{text!.slice(intention.index, splitEnd)}</em> : <>{formatIntentionKind(intention, splitEnd, text)}</>}
				{!next && text!.slice(splitEnd)}
				{next && text!.slice(splitEnd, next.index)}
			</>
		);
	});
	return styledIntention;
};
export const formatArticleSections = (section: ArticleSection) => {
	const { kind, intentions, text, attribution, url } = section;

	switch (kind) {
		case 'text': {
			if (intentions && intentions.length > 0) {
				return <ArticleSectionStyle>{text && formatIntention(intentions, text)}</ArticleSectionStyle>;
			} else return <ArticleSectionStyle>{text}</ArticleSectionStyle>;
		}
		case 'heading': {
			return (
				<ArticleSectionStyle>
					<h2>{text}</h2>
				</ArticleSectionStyle>
			);
		}
		case 'quote': {
			return (
				<QuoteContainerStyle>
					<section>{text}</section>
					<small>{attribution}</small>
				</QuoteContainerStyle>
			);
		}
		case 'image': {
			return (
				<ArticleSectionImageStyle>
					<img src={section.url} alt={section.text} />
					{intentions && intentions.length > 0 ? <div>{text && formatIntention(intentions, text)}</div> : <div>{section.text}</div>}
				</ArticleSectionImageStyle>
			);
		}
		default: {
			return <ArticleSectionStyle>{text}</ArticleSectionStyle>;
		}
	}
};
