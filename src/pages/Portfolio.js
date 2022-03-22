import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import classes from './Portfolio.module.scss';

import db from '../firebase/firebase';
import Loading from '../components/UI/Loading';
import { LargeContainer } from '../components/UI/Containers';
import { WorkTogetherBtn } from '../components/UI/Buttons';
import PortfolioImage, {
	PortfolioImageLoading,
} from '../components/_portfolio/PortfolioImage';

function Portfolio() {
	const [projectsList, setProjectsList] = useState();
	const [loaded, setLoaded] = useState(false);

	const fetchPortfolio = useCallback(async () => {
		await db
			.collection('portfolio')
			.orderBy('id', 'desc')
			.get()
			.then((querySnapshot) => {
				const data = querySnapshot.docs.map((doc) => doc.data());
				let projectsList = [];
				projectsList.push(...data);
				setProjectsList(projectsList);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	useEffect(() => {
		fetchPortfolio();
		setTimeout(() => {
			setLoaded(true);
		}, 1000);
	}, []);

	let loading;

	if (projectsList && projectsList.length > 0) {
		loading = projectsList.map((doc, index) => (
			<Link
				className={classes.link}
				to={`/portfolio/${doc.project_url}`}
				key={`project-${doc.id}`}
			>
				<PortfolioImage
					overlay_text={doc.overlay_text}
					main_image={doc.main_image}
					key={doc.id}
				/>
			</Link>
		));
	}

	return (
		<LargeContainer>
			<div
				className={classes.portfolio}
				style={loaded ? { display: 'flex' } : { display: 'none' }}
			>
				{loading}
			</div>
			{!loaded && <Loading />}
			<WorkTogetherBtn />
		</LargeContainer>
	);
}

export default Portfolio;
