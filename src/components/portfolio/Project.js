import classes from './Project.module.scss';
import { useEffect, useState } from 'react';
import db from '../../firebase/firebase';
import { CenteredContainer } from '../UI/Containers';
import { Together } from '../UI/Buttons';
import Loading from '../UI/Loading';

function Project() {

    const pathnameRaw = window.location.pathname;
    const pathname = pathnameRaw.slice(12)
    const [imagesList, setImagesList] = useState();

    useEffect(() => {
		window.scrollTo(0, 0)
        const images = db.collection('portfolio').doc(`${pathname}`).get()
        .then((doc) => {
            const imagesData = doc.data();
            const dataLength = Object.keys(imagesData.project_images).length
            const imagesList = [];
            for (let i = 0; i < dataLength; i++) {
                imagesList.push(imagesData.project_images[Object.keys(imagesData.project_images)[i]]);
            }
            setImagesList(imagesList);
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <CenteredContainer>
            <div className={classes.images}>
                {imagesList ? imagesList.map((image) => (
                    <img key={Math.random()} className={classes.image} src={`${image}`}></img>
                    )) : <Loading />}
            </div>
            <Together/>
        </CenteredContainer>
    )
}

export default Project;