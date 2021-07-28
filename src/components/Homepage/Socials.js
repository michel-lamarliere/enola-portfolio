import classes from './Socials.module.scss';
import { useLanguage } from '../../store/LanguageContext.js';

export function SocialsLink(props) {
    return (
        <a className={classes.socials_logos_logo}  style={{backgroundImage: `url('${props.image_url}')`}} href={props.link} target="_blank" rel="noreferrer"></a>
    )
}

export function Socials(props) {
    const english = useLanguage();

    const text = {
        socials: english ? 'My social networks' : 'Mes réseaux sociaux',
    }
    return (
        <div className={classes.socials}>
            <div className={classes.socials_title}>{text.socials}</div>
            <div className={classes.socials_logos}>
                {props.children}
            </div>
        </div>
    )
}
