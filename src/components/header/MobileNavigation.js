import { useState } from 'react';
import classes from './MobileNavigation.module.scss';
import Links from './Links';
import { LogoBtn, HamburgerBtn, LanguageText } from './Buttons';
import Overlay from '../layout/Overlay';

function MobileNavigation() {
    
    
    const [openned, open] = useState(false);
    
    function NoScroll() {
        if (openned) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible';
        }
        return null;
    }

    return (
        <div className={classes.mobilenav}>
            <div className={classes.mobile}>
                <LogoBtn onClick={() => open(!openned)}/>
                <HamburgerBtn onClick={() => open(!openned)}/>
            </div>
            <NoScroll/>
            { openned && <Overlay />}
            { openned && <Links onClick={() => open(!openned)} languageLink={<LanguageText className={classes.link_mobile} onClick={() => open(!openned)}/>}/>}
        </div>
    )
}

export default MobileNavigation;