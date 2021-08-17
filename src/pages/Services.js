import { useEffect } from 'react'
import { CenteredContainer } from '../components/UI/Containers';
import Etapes from '../components/_services/Etapes';
import Presentation from '../components/_services/Presentation';
import classes from './Services.module.scss';
import { WorkTogetherBtn } from '../components/UI/Buttons';

function Services() {

    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

    return (
        <CenteredContainer>
            <Presentation/>
            <Etapes/>
            <WorkTogetherBtn />
        </CenteredContainer>
    )
}

export default Services;