import classes from './Socials.module.scss';

export function SocialsLink(props) {
    return (
        <a className={classes.socials_logos_logo}  style={{backgroundImage: `url('${props.image_url}')`}} href={props.link} target="_blank"></a>
    )
}

export function Socials(props) {
    return (
        <div className={classes.socials}>
                <div className={classes.socials_title}>Mes réseaux sociaux</div>
                <div className={classes.socials_logos}>
                    {props.children}
                </div>
        </div>
    )
}
