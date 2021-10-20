import { useEffect, useState } from 'react';
import classes from './Project.module.scss';

import db from '../firebase/firebase';
import { CenteredContainer } from '../components/UI/Containers';
import { WorkTogetherBtn } from '../components/UI/Buttons';
import Loading from '../components/UI/Loading';
import { Redirect } from 'react-router-dom';

function Project() {
	const [error, setError] = useState(false);
	const [loaded, setLoaded] = useState(false);
	const pathnameRaw = window.location.pathname;
	const pathname = pathnameRaw.slice(12);
	const [imagesList, setImagesList] = useState();

	useEffect(() => {
		const images = db
			.collection('portfolio')
			.doc(`${pathname}`)
			.get()
			.then((doc) => {
				const imagesData = doc.data();
				const dataLength = Object.keys(imagesData.project_images).length;
				const imagesList = [];
				for (let i = 0; i < dataLength; i++) {
					imagesList.push(
						imagesData.project_images[Object.keys(imagesData.project_images)[i]]
					);
				}
				setImagesList(imagesList);
			})
			.catch((err) => {
				setError(true);
			});

		setTimeout(() => {
			setLoaded(true);
		}, 1500);
	}, []);

	let redirect =
			<>      
                {imagesList &&
                    imagesList.map((image, index) => (
                        <img
                            key={Math.random()}
                            className={classes.image}
                            src={image}
                            alt={`project ${index}`}
                        ></img>
                ))}
			</>
    
    if (error) {
        redirect = <Redirect to='/error' />;
	}
    
    return (
        <CenteredContainer>
            <div className={classes.images}>
                { !loaded && <Loading />}
                {redirect}
            </div>
            <WorkTogetherBtn />
        </CenteredContainer>
    )
}

export default Project;
