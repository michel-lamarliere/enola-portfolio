import { CenteredContainer } from '../__layout/Containers';
import Etapes from '../services/Etapes';
import Presentation from '../services/Presentation';
import classes from './Services.module.scss';
import { Together } from '../__multiple/Buttons';

function Services() {
    return (
        <CenteredContainer>
            <Presentation/>
            <Etapes/>
            <Together/>
        </CenteredContainer>
    )
}

export default Services;