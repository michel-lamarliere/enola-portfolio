import classes from './Navigation.module.scss'
import Links from './Links';
import { LogoBtn , LanguageBtn} from './Buttons';


function Navigation() {

    return (
        <div className={classes.display}>
            <Links 
                logo = {
                    <LogoBtn />
                }
                language = {   
                    <LanguageBtn />
                }
            />
        </div>
    )
}

export default Navigation