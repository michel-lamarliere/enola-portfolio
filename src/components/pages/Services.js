import { LargeContainer } from '../layout/Containers';
import Etapes from '../servicesPage/Etapes';
import Presentation from '../servicesPage/Presentation';
import classes from './Services.module.scss';

function Services() {
    return (
        <LargeContainer>
            <Presentation/>
            <Etapes/>
        </LargeContainer>
    )
}

export default Services;