import { Link } from 'react-router-dom';
import classes from './Buttons.module.scss';
import { useLanguage } from '../../store/LanguageContext.js'

export function WorkTogetherBtn(props) {
    const english = useLanguage();

    const text = {
        together: english ? "Let's work together" : 'Travaillons ensemble',
    }

    return (
        <Link to="/contact"className={[classes.together, props.className].join(' ')}>{text.together}</Link>
    )
};

export function ContactMeBtn(props) {
    const english = useLanguage();

    const text = {
        contact: english ? 'Contact me' : 'Contactez-moi'
    }
    return (
        <Link to="/contact" className={[classes.contact, props.className].join(' ')}>{text.contact}</Link>
    )
};

export function PortfolioBtn(props) {
    const english = useLanguage();

    const text = {
        portfolio: english ? 'Check my portfolio' : 'Voir mon portfolio'
    }

    return (
        <Link to="/portfolio" className={[classes.portfolio, props.className].join(' ')}>{text.portfolio}</Link>
    );
}

export function SeeMoreBtn(props) {
    const english = useLanguage();

    const text = {
        more: english ? 'See More' : 'Voir Plus'
    }

    return (
        <Link to="/portfolio" className={[classes.more, props.className].join(' ')}>{text.more}</Link>
    );
}

export function FormBtn() {
    const english = useLanguage();

    const text = {
        send: english ? 'Send' : 'Envoyer',
    }

    return (
        <button type="submit">
            {text.send}
        </button>
    );
}