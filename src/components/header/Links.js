import classes from './Links.module.scss'
import { Link } from 'react-router-dom';

export function NavLine() {
    return (
        <span className={classes.lign}></span>
    )
}

function Links(props) {

    return (
        <nav className={classes.header}>
            {props.logo}
            <nav className={classes.navbar}>
                <NavLine />
                <Link to='/' className={classes.link} onClick={props.onClick}>Accueil</Link>
                <NavLine />
                <Link to='/portfolio' className={classes.link} onClick={props.onClick}>Portfolio</Link>
                <NavLine />
                <Link to='/services' className={classes.link} onClick={props.onClick}>Services</Link>
                <NavLine />
                <Link to='/about' className={classes.link} onClick={props.onClick}>À Propos</Link>
                <NavLine />
                <Link to='/contact' className={classes.link} onClick={props.onClick}>Contact</Link>
                <NavLine />
                {props.languageLink}
                <NavLine />
            </nav>
            {props.language}
        </nav>
    )
}


export default Links;