import { Link } from 'react-router-dom';
import { useLanguage, useLanguageUpdate } from '../../store/LanguageContext.js';
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

    return (
        <div className={[`${classes.hamburgerbtn} ${props.className}`].join(' ')} onClick={props.onClick}>
            <span className={classes.hamburgerbtn_lign}></span>
        </div>
    )
}

export function LanguageBtn(props) {
    const english = useLanguage();
    const toggleLanguage = useLanguageUpdate();

    let word = english ? 'FR' : 'EN';

    return (
        <div className={classes.language}>
            {english
                ? <img className={classes.language_text} src={imageFr} onClick={toggleLanguage}></img>
                : <img className={classes.language_text} src={imageEn} onClick={toggleLanguage}></img>
            }
        </div>
    )
}
