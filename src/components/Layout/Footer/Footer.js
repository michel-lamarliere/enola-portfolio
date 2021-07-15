import { Link } from 'react-router-dom';
import classes from './Footer.module.scss'
import { useLanguage } from '../../../store/LanguageContext.js';

function Footer() {
    const english = useLanguage();

    const text = {
        legal: english ? 'Legal Notice' : 'Mentions Légales',
        michel: english ? 'Developed by Michel Lamarlière' : 'Développé par Michel Lamarlière'
    }

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
                <Link className={classes.links_link} to="/legal">{text.legal}</Link>
            </div>
            <a className={classes.michel} href='https://www.linkedin.com/in/michel-lamarli%C3%A8re-a8394a1b1/' target='_blank'>{text.michel}</a>
        </div>
    )
}

export default Footer;
