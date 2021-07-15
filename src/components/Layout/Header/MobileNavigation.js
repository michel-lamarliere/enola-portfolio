import { useState } from 'react';
import classes from './MobileNavigation.module.scss';
import Links from './Links';
import { LogoBtn, HamburgerBtn, LanguageBtn } from '../../UI/HeaderButtons';
import Overlay from '../../UI/Overlay';

function MobileNavigation() {
    
    const [openned, open] = useState(false);

    function NoScroll() {
        if (openned) {
            document.body.style.overflow = 'hidden';

        } else {
            document.body.style.overflow = 'visible';
        }
        return null;
    }

    return (
        <div className={classes.mobilenav}>
            <div className={classes.mobile}>
                <LogoBtn />
                <HamburgerBtn className={`${openned ? 'HeaderButtons_open__3NOUb ': ''}`} onClick={() => open(!openned)}/>
            </div>
            <NoScroll />
            { openned && <Overlay />}
            { openned && <Links onClick={() => open(!openned)} languageLink={<LanguageBtn onClick={() => open(!openned)}/>}/>}
        </div>
    )
}

export default MobileNavigation;