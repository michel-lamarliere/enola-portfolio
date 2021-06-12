import { Link } from 'react-router-dom';
import { LargeContainer } from '../__layout/Containers';
import classes from './About.module.scss';
import img from '../../assets/img/contact.png';
import questionnaire from '../../assets/docs/questionnaire.pdf';
import { useLanguage } from '../../translations/LanguageContext.js'

function About() {

    const english = useLanguage();

    const text = {
        who: english ? 'Who am I?' : 'Qui suis-je ?',

        one: english ? 'My name is Enola and I am passionate about art.' : 'Je m’appelle Enola et l’art sous toutes ses formes me passionne.',
        two: english ? 'Graduated of an Administration Bachelor, I took a long time to find my vocation.' : 'Diplômée d’un Bac ES et d’une licence AES, j’ai mis du temps avant de trouver ma voie.',
        three: english ? 'Since I changed my career path, I am fulfilled in my work. Every day, I take pleasure in carrying out new unique projects.' : 'Depuis que je me suis réorientée pour devenir graphiste, je suis sur un petit nuage et je m’épanoui chaque jours à réaliser de nouveaux projets uniques et variés.',
        four: english ? 'Being self-employed, I manage my schedule as I want  and I can give the required attention to your projects.' : 'Étant à mon compte, je gère mon emploi du temps comme je l’entends et peux donner l’attention nécessaire à vos projets.',
        five: english ? 'Discover the process for developing a project ' : 'Découvrez mes étapes pour l’élaboration d’un projet ',
        five_link: english ? 'here' : 'ici',
        six: english ? 'You wish to present your project to me and obtain a quote? Download my questionnaire' : 'Vous souhaitez me présenter votre projet et obtenir un devis ? Téléchargez mon questionnaire',
        six_link: english ? 'here' : 'ici',
        seven: english ? 'Looking forward to working with you!' : 'Hâte de travailler avec vous ! »',

        button: english ? 'Check my portfolio' : 'Voir mon portfolio',
    }

    return (
        <LargeContainer >
            <div className={classes.about}>
                <img className={classes.image} src={img}></img>
                <div className={classes.text}>
                    <div className={classes.text_title}>{text.who}</div>
                    <div className={classes.text_para}>
                        <div>{text.one}</div>
                        <div>{text.two}</div>
                        <div>{text.three}</div>
                        <div>{text.four}</div>
                        <div>{text.five}<Link to={'/services'} className={classes.text_para_link}>{text.five_link}</Link>.</div>
                        <div>{text.six} <a className={classes.text_para_link} href={questionnaire} download>{text.six_link}</a>.</div>
                        <div>{text.seven}</div>
                    </div>
                </div>
            </div>
            <Link to={'/portfolio'} className={classes.button}>{text.button}</Link>
        </LargeContainer >
    )
}

export default About;
