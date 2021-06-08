import { Link } from 'react-router-dom';
import classes from './Footer.module.scss'

function Footer() {

    return (
        <div className={classes.footer}>
            <div className={classes.socials}>
                <div className={[classes.socials_logo, classes.socials_logo_facebook].join(' ')}>
                    <a href="https://www.facebook.com/enolalouge.designs/" className={classes.socials_logo_link} target="_blank" rel="noreferrer"></a>                
                </div>
                <div className={[classes.socials_logo, classes.socials_logo_instagram].join(' ')}>
                    <a href="https://www.instagram.com/enola.louge/" className={classes.socials_logo_link} target="_blank" rel="noreferrer"></a>
                </div>
                <div className={[classes.socials_logo, classes.socials_logo_behance].join(' ')}>
                    <a href="https://www.behance.net/enolalouge1" className={classes.socials_logo_link} target="_blank" rel="noreferrer"></a>
                </div>
            </div>
            <div className={classes.links}>
                <a className={classes.links_link} style={{cursor: 'default'}}>Enola Louge 2021</a>
                <div className={classes.links_separator}>|</div>
                <Link className={classes.links_link} to="/contact">Contact</Link>
                <div className={classes.links_separator}>|</div>
                <Link className={classes.links_link} to="/legal">Mentions Légales</Link>
            </div>
        </div>
    )
}

export default Footer;