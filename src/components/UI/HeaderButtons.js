import { Link } from 'react-router-dom';
import { useLanguage, useLanguageUpdate } from '../../store/language-context.js';
import { useOpenned, useOpennedUpdate } from '../../store/modal-context.js'
import classes from './HeaderButtons.module.scss';
import imageEn from '../../assets/icons/en.svg';
import imageFr from '../../assets/icons/fr.svg';

export function LogoBtn(props) {
    return (
        <div className={classes.logo}>
            <Link to='/' className={classes.logo_button} onClick={props.onClick}/>
        </div>
    )
}

export function HamburgerBtn(props) {
    const openned = useOpenned();
    const toggleOpenned = useOpennedUpdate();

    return (
        <div className={`${classes.hamburgerbtn} ${openned ? classes.open : ''}`} onClick={toggleOpenned}>
            <span className={classes.hamburgerbtn_lign}></span>
        </div>
    )
}

export function LanguageBtn(props) {
    const english = useLanguage();
    const toggleLanguage = useLanguageUpdate();

    return (
        <div className={classes.language}>
            {english
                ? <img className={classes.language_text} src={imageFr} onClick={toggleLanguage} alt="Français"></img>
                : <img className={classes.language_text} src={imageEn} onClick={toggleLanguage} alt="English"></img>
            }
        </div>
    )
}
