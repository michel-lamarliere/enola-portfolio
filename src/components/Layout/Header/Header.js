import classes from './Header.module.scss';
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation';
import { CenteredContainer } from '../../UI/Containers';

function Header() {
    return (
        <CenteredContainer>
            <Navigation />
            <MobileNavigation />
        </CenteredContainer>
    )
}

export default Header;