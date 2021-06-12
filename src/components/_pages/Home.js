import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
import mainImg from '../../assets/icons/accueil.svg';
import iconLinkedin from '../../assets/icons/linkedin_blue.svg';
import iconDribbble from '../../assets/icons/dribbble_blue.svg';
import iconFacebook from '../../assets/icons/facebook_blue.svg';
import iconInstagram from '../../assets/icons/instagram_blue.svg';
import iconBehance from '../../assets/icons/behance_blue.svg';
import { CenteredContainer } from '../__layout/Containers';
import { ContactMe } from '../__multiple/Buttons';
import { Socials, SocialsLink } from '../home/Socials';
import MerciDiv from '../__multiple/Merci'
import db from '../../firebase';
import Loading from '../__multiple/Loading';
import LastProjects from '../home/LastProjects';
import { useLanguage } from '../../translations/LanguageContext.js';

function Home() {
    const english = useLanguage();

    const [projectsList, setProjectsList] = useState();

    useEffect(() => {
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

    const text = {
        presentation_one: english ? 'Brand Identity' : 'Identité visuelle',
        presentation_two: 'Packaging',
        presentation_three: 'Web Design',
        projects: english ? 'My lastest projects' : 'Mes derniers projects',
        button_more: english ? 'See More' : 'Voir Plus',
        info: english ? 'Need informations or a quote ?' : "Besoin d'infos ou d'un devis ?",
    }

    return (
        <div>
            <div className={classes.fond}></div>
                <CenteredContainer>
                    <div className={classes.main}>
                        <div className={classes.main_image}>
                            <img src={mainImg} alt='image accueil' className={classes.main_image_img}></img>
                        </div>
                        <div className={classes.main_services}>
                            <div className={classes.main_services_text}>{text.presentation_one}</div>
                            <div className={classes.main_services_dot}></div>
                            <div className={classes.main_services_text}>{text.presentation_two}</div>
                            <div className={classes.main_services_dot}></div>
                            <div className={classes.main_services_text}>{text.presentation_three}</div>
                        </div>
                    </div>
                </CenteredContainer>
            <CenteredContainer>
                <div className={classes.projects}>
                    <div className={classes.projects_title}>{text.projects}</div>
                    <div className={classes.projects_images}>
                        {projectsList ? projectsList.slice(0, 3).map((doc) => (
                            <Link to={`/portfolio/:${doc.project_url}`} key={Math.random()}>
                                <LastProjects overlay_text={doc.overlay_text} main_image={doc.main_image} key={doc.id}/>
                            </Link>
                        )) : <Loading/>}
                    </div>
                    <Link to='/portfolio' className={classes.projects_more}>{text.button_more}</Link>
                </div>
                <Socials>
                    <SocialsLink image_url={iconDribbble} link="https://dribbble.com/enolalouge"/>
                    <SocialsLink image_url={iconFacebook} link="https://www.facebook.com/enolalouge.designs"/>
                    <SocialsLink image_url={iconInstagram} link="https://www.instagram.com/enola.louge"/>
                    <SocialsLink image_url={iconBehance} link="https://www.behance.net/enolalouge1"/>
                    <SocialsLink image_url={iconLinkedin} link="https://www.linkedin.com/in/enola-louge-76b76a1a2"/>
                </Socials>
                <div className={classes.contact}>
                    <div className={classes.contact_title}>{text.info}</div>
                    <ContactMe className={classes.contactme} />
                    <MerciDiv />
                </div>
            </CenteredContainer>
        </div>
    )
}

export default Home;
