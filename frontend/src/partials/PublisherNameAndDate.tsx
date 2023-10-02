import { css } from '@emotion/css';
import { formatDate } from '../utils/helpers';
type Props = {
	publisherName?: string;
	datePublished?: string;
	publisherLogoUrl?: string;
	logoSize?: string;
	fontColor?: string;
	fontSize?: string;
	fontWeight?: number;
	padding?: string;
};
const PublisherNameAndDate = (props: Props) => {
	const { publisherName, datePublished, publisherLogoUrl, fontSize, logoSize, fontWeight, fontColor, padding } = props;
	return (
		<small
			className={css`
				font-size: ${fontSize || '12px'};
				font-weight: ${fontWeight || 400};
				color: ${fontColor ? fontColor : '#3c3c3c'};
				display: flex;
				align-items: center;
				padding: ${padding ? padding : 0};
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
