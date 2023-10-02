import { useParams } from 'react-router-dom';

const SelectedCategoryPage = () => {
	const { category } = useParams();
	return <div>SelectedCategoryPage {category}</div>;
};
export default SelectedCategoryPage;
