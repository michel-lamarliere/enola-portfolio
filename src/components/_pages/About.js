import { Link } from 'react-router-dom';
import { LargeContainer } from '../__layout/Containers';
import classes from './About.module.scss';
import img from '../../assets/img/contact.png';
import questionnaire from '../../assets/docs/questionnaire.pdf';

function About() {

    return (
        <LargeContainer >
            <div className={classes.about}>
                <img className={classes.image} src={img}></img>
                <div className={classes.text}>
                    <div className={classes.text_title}>Qui suis-je?</div>
                    <div className={classes.text_para}>
                        <div>Je m’appelle Enola et l’art sous toutes ses formes.</div>
                        <div>Diplômée d’un bac ES et d’une licence AES, j’ai mis du temps avant de trouver ma voie.</div>
                        <div>Depuis que je me suis réorientée pour devenir graphiste, je suis sur un petit nuage et je m’épanoui chaque jours à réaliser de nouveaux projets riches, uniques et variés.</div>
                        <div>Étant à mon compte, je gère mon emploi du temps comme je l’entend et peux donner le temps nécessaire à vos projets.</div>
                        <div>Découvrez mes étapes pour l’élaboration d’un projet <Link to={'/services'} className={classes.text_para_link}>ici</Link>.</div>
                        <div>Vous souhaitez me présenter votre projet et obtenir un devis? Télécharger mon questionnaire <a className={classes.text_para_link} href={questionnaire} download>ici</a>.</div>
                        <div>Hâte de travailler avec vous !</div>
                    </div>
                </div>
            </div>
            <Link to={'/portfolio'} className={classes.button}>Voir mon portfolio</Link>
        </LargeContainer >
    )
}

export default About;