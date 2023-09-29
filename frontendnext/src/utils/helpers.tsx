'use client';
import { format, differenceInHours } from 'date-fns';
import formatRelative from 'date-fns/format';

export const formatDate = (date: string) => {
	var oneDayFromNow = new Date().getTime() + 1 * 24 * 60 * 60 * 1000;
	const difference = differenceInHours(oneDayFromNow, Date.parse(date));
	if (difference <= 1) {
		return <>just now</>;
	} else if (difference <= 24) {
		return <>{format(new Date(), "H 'hours ago'")}</>;
	} else return <>{formatRelative(new Date(date), 'MMM Mo, yyyy')}</>;
};
export const truncateArticleDescription = (desc: string, length: number) => {
	return desc.length > length ? `${desc.substring(0, 125)}...` : desc;
};
