import classes from './Buttons.module.scss';
import { Link } from 'react-router-dom';

export function Together(props) {
    return (
        <Link to="/contact"className={[classes.together, props.className].join(' ')}>Travaillons ensemble</Link>
    )
};

export function ContactMe(props) {
    return (
        <Link to="/contact" className={[classes.contact, props.className].join(' ')}>Contactez-moi</Link>
    )
};
