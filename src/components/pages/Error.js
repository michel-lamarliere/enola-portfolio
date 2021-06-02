import { CenteredContainer } from '../layout/Containers';
import classes from './Error.module.scss';

function Error() {
    return (
        <CenteredContainer>
            <div className={classes.container}>
                <div className={classes.sorry}>Désolée !</div>
                <div className={classes.construction}>Cette page est en cours de construction.</div>
            </div>
        </CenteredContainer>
    )
}

export default Error;