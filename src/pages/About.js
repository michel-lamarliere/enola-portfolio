import { Link } from 'react-router-dom';
import { LargeContainer } from '../components/UI/Containers';
import classes from './About.module.scss';
import img from '../assets/img/contact.png';
import questionnaire from '../assets/docs/questionnaire.pdf';
import { useLanguage } from '../store/LanguageContext.js'
import { PortfolioBtn } from '../components/UI/Buttons';

function About() {

    const english = useLanguage();

    const text = {
        who: english ? 'Who am I?' : 'Qui suis-je ?',

        one: english ? 'My name is Enola and I am passionate about art.' : 'Je m’appelle Enola et l’art sous toutes ses formes me passionne.',
        two: english ? "After graduating with a Bachelor's Degree in Economics and Social Sciences, I felt that it wasn't meant for me." : 'Diplômée d’un Bac ES et d’une licence AES, j’ai mis du temps avant de trouver ma voie.',
        three: english ? "I've since changed my career path, and now am rejoiced over finding my work fulfilling. Every day, I take a great amout of pleasure in carrying out new unique projects." : 'Depuis que je me suis réorientée pour devenir graphiste, je suis sur un petit nuage et je m’épanoui chaque jours à réaliser de nouveaux projets uniques et variés.',
        four: english ? 'By being self-employed, I can manage my schedule properly and focus on your projects.' : 'Étant à mon compte, je gère mon emploi du temps comme je l’entends et peux donner l’attention nécessaire à vos projets.',
        five: english ? 'Discover my process of developing a project ' : 'Découvrez mes étapes pour l’élaboration d’un projet ',
        five_link: english ? 'here' : 'ici',
        six: english ? 'If you wish to exchange with me about your project and/or obtain a quote? Download my questionnaire' : 'Vous souhaitez me présenter votre projet et obtenir un devis ? Téléchargez mon questionnaire',
        six_link: english ? 'here' : 'ici',
        seven: english ? "I'm looking forward to working with you!" : 'Hâte de travailler avec vous !',
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
            <PortfolioBtn />
        </LargeContainer >
    )
}

export default About;
