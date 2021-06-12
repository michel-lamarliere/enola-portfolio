import { CenteredContainer } from '../__layout/Containers';
import classes from './Error.module.scss';
import { useLanguage } from '../../translations/LanguageContext.js';

function Error() {
    const english = useLanguage();

    const text = {
        sorry: english ? 'Error 404' : 'Error 404',
        construction: english ? 'Page not found.' : 'Page non trouvée.'
    }

    return (
        <CenteredContainer>
            <div className={classes.container}>
                <div className={classes.sorry}>{text.sorry}</div>
                <div className={classes.construction}>{text.construction}</div>
            </div>
        </CenteredContainer>
    )
}

export default Error;
