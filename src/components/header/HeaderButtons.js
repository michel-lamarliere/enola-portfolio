import { Link } from 'react-router-dom';
import classes from './HeaderButtons.module.scss';

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
    return (
        <div className={classes.language}>
            <Link to='/error' className={classes.language_text} onClick={props.onClick}>EN</Link>
        </div>
    )
}
