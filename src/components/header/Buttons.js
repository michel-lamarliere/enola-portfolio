import { Link } from 'react-router-dom';
import classes from './Buttons.module.scss';

export function LogoBtn(props) {
    return (
        <div className={classes.logo}>
            <Link to='/' className={classes.logo_button} onClick={props.onClick}/>
        </div>
    )
}

export function HamburgerBtn(props) {

    return (
        <div className={classes.hamburgerbtn} onClick={props.onClick}>
            <span className={classes.hamburgerbtn_lign}></span>
            <span className={classes.hamburgerbtn_lign}></span>
            <span className={classes.hamburgerbtn_lign}></span>
        </div>
    )
}

export function LanguageBtn() {
    return (
        <div className={classes.language}>
            <Link to='/error' className={classes.language_text}>EN</Link>
        </div>
    )
}

export function LanguageText(props) {
    return (
        <Link to="/error" className={props.className} onClick={props.onClick}>EN</Link>
    )
}

