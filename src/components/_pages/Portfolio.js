import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Portfolio.module.scss'
import db from '../../firebase';
import { LargeContainer } from '../__layout/Containers';
import PortfolioImage from '../portfolio/PortfolioImage';
import { Together } from '../__multiple/Buttons';
import Loading from '../__multiple/Loading';

function Portfolio() {
    
    const [projectsList, setProjectsList] = useState();
    
    useEffect(() => {
        window.scrollTo(0, 0)
        const portfolio = db.collection('portfolio').orderBy("id", "desc").get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            let projectsList = [];
            projectsList.push(...data);
            setProjectsList(projectsList)
        })
        .catch(err => {
            console.error(err)
        })
    }, [])

    return (
        <LargeContainer>
            <div className={classes.portfolio}>
                {projectsList ? projectsList.map((doc) => (
                    <Link to={`/portfolio/:${doc.project_url}`} key={Math.random()}>
                        <PortfolioImage overlay_text={doc.overlay_text} main_image={doc.main_image} key={doc.id}/>
                    </Link>
                )) : <Loading/>}
            </div>
            <Together/>
        </LargeContainer >
    )
}

export default Portfolio;