import classes from './Merci.module.scss';
import { useLanguage } from '../../store/language-context.js';

function MerciDiv(props) {
    const english = useLanguage();

    const text = {
        thankyou: english ? 'THANK YOU' : 'MERCI',
        visit: english ? 'for your visit!' : 'pour votre visite !'
    }

    return (
        <div className={[classes.merci, props.className].join(' ')}>
            <div className={classes.merci_title}>{text.thankyou}</div>
            <div className={classes.merci_text}>{text.visit}</div>
        </div>
    )
}

export default MerciDiv;
