import classes from './Links.module.scss'
import { Link } from 'react-router-dom';
import { useLanguage, useLanguageUpdate } from '../../translations/LanguageContext.js'

export function NavLine() {
    return (
        <span className={classes.lign}></span>
    )
}

function Links(props) {
    const english = useLanguage();
    const toggleLanguage = useLanguageUpdate();

    let words = {
        accueil: english ? 'Home' : 'Accueil',
        about: english ? 'About': 'À propos'
    }

    return (
        <nav className={classes.header}>
            {props.logo}
            <nav className={classes.navbar}>
                <NavLine />
                <Link to='/' className={classes.link} onClick={props.onClick}>{words.accueil}</Link>
                <NavLine />
                <Link to='/portfolio' className={classes.link} onClick={props.onClick}>Portfolio</Link>
                <NavLine />
                <Link to='/services' className={classes.link} onClick={props.onClick}>Services</Link>
                <NavLine />
                <Link to='/about' className={classes.link} onClick={props.onClick}>{words.about}</Link>
                <NavLine />
                <Link to='/contact' className={classes.link} onClick={props.onClick}>Contact</Link>
                <NavLine />
                {props.languageLink}
            </nav>
            {props.language}
        </nav>
    )
}


export default Links;
