import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
import mainImgFr from '../assets/icons/accueil.svg';
import mainImgEn from '../assets/icons/home.svg';
import iconLinkedin from '../assets/icons/linkedin_blue.svg';
import iconDribbble from '../assets/icons/dribbble_blue.svg';
import iconFacebook from '../assets/icons/facebook_blue.svg';
import iconInstagram from '../assets/icons/instagram_blue.svg';
import iconBehance from '../assets/icons/behance_blue.svg';
import { CenteredContainer } from '../components/UI/Containers';
import { ContactMeBtn, SeeMoreBtn } from '../components/UI/Buttons';
import { Socials, SocialsLink } from '../components/_homepage/Socials';
import MerciDiv from '../components/UI/Merci'
import db from '../firebase/firebase';
import Loading from '../components/UI/Loading';
import LastProjects from '../components/_homepage/LastProjects';
import { useLanguage } from '../store/language-context.js';

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
        projects: english ? 'My latest projects' : 'Mes derniers projects',
        info: english ? 'Need informations or a quote ?' : "Besoin d'infos ou d'un devis ?",
    }

    return (
        <>
            <div className={classes.fond}></div>
                <CenteredContainer>
                    <div className={classes.main}>
                        <div className={classes.main_image}>
                            {english
                                ? <img src={mainImgEn} alt='image accueil' className={classes.main_image_img}></img>
                                : <img src={mainImgFr} alt='image accueil' className={classes.main_image_img}></img>
                            }
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
                    <SeeMoreBtn />
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
                    <ContactMeBtn className={classes.contactme} />
                    <MerciDiv />
                </div>
            </CenteredContainer>
        </>
    )
}

export default Home;
