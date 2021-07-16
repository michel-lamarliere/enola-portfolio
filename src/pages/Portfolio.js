import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import classes from './Portfolio.module.scss'
import db from '../firebase/firebase';
import { LargeContainer } from '../components/UI/Containers';
import PortfolioImage from '../components/Portfolio/PortfolioImage';
import { WorkTogetherBtn } from '../components/UI/Buttons';
import Loading from '../components/UI/Loading';

function Portfolio() {

    const [projectsList, setProjectsList] = useState();

    const fetchPortfolio = useCallback(async () => {
        const portfolio = await db.collection('portfolio').orderBy("id", "desc").get()
        .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            let projectsList = [];
            projectsList.push(...data);
            setProjectsList(projectsList)
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
        fetchPortfolio();
    }, [])

    return (
        <LargeContainer>
            <div className={classes.portfolio}>
                {projectsList ? projectsList.map((doc) => (
                    <Link className={classes.link} to={`/portfolio/:${doc.project_url}`} key={Math.random()}>
                        <PortfolioImage overlay_text={doc.overlay_text} main_image={doc.main_image} key={doc.id} ></PortfolioImage>
                    </Link>
                )) : <Loading/>}
            </div>
            <WorkTogetherBtn />
        </LargeContainer>
    )
}

export default Portfolio;
