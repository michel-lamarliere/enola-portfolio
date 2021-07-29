import classes from './ThankYou.module.scss';
import { CenteredContainer } from '../components/UI/Containers'

function ThankYou() {
    return (
        <CenteredContainer>
            <div className={classes.thankyou}>
                <div className={classes.thankyou_title}>Merci !</div>
                <div className={classes.thankyou_text}>Votre message a bien été envoyé.</div>
                <div className={classes.thankyou_text}>Je vous recontacterai très rapidement.</div>
            </div>
        </CenteredContainer>
    )
}

export default ThankYou;