import classes from './Buttons.module.scss';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../store/LanguageContext.js'

export function Together(props) {
    const english = useLanguage();

    const text = {
        together: english ? "Let's work together" : 'Travaillons ensemble',
        contact: english ? 'Contact me' : 'Contactez-moi'
    }

    return (
        <Link to="/contact"className={[classes.together, props.className].join(' ')}>{text.together}</Link>
    )
};

export function ContactMe(props) {
    const english = useLanguage();

    const text = {
        contact: english ? 'Contact me' : 'Contactez-moi'
    }
    return (
        <Link to="/contact" className={[classes.contact, props.className].join(' ')}>{text.contact}</Link>
    )
};
