import { css } from '@emotion/css';
import { formatDate } from '../utils/helpers';
type Props = {
	publisherName?: string;
	datePublished?: string;
	publisherLogoUrl?: string;
	logoSize?: string;
	textColor?: string;
	fontSize?: string;
	fontWeight?: number;
};
const PublisherNameAndDate = (props: Props) => {
	const { publisherName, datePublished, publisherLogoUrl, fontSize, logoSize, fontWeight } = props;
	return (
		<small
			className={css`
				font-size: ${fontSize};
				font-weight: ${fontWeight || 400};
				display: flex;
				align-items: center;
			`}>
			<img
				className={css`
					width: ${logoSize || '12px'};
					height: ${logoSize || '12px'};
					border-radius: 50%;
					margin: 0 4px;
				`}
				src={publisherLogoUrl}
				alt={publisherName}
			/>
			{publisherName} ● {formatDate(datePublished!)}
		</small>
	);
};
export default PublisherNameAndDate;
