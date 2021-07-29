import { useEffect } from 'react'
import { CenteredContainer } from '../components/UI/Containers';
import Etapes from '../components/Services/Etapes';
import Presentation from '../components/Services/Presentation';
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