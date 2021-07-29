import classes from './Presentation.module.scss';
import imgBranding from '../../assets/icons/branding.svg'
import imgWeb from '../../assets/icons/web.svg'
import imgPackaging from '../../assets/icons/packaging.svg'
import { useLanguage } from '../../store/LanguageContext.js'

function Presentation() {
    const english = useLanguage();

    const text = {
        identity: english ? 'Brand Identity' : 'Identité Visuelle',
        identity_one: english ? 'Logotype' : 'Logo',
        identity_two: english ? 'Brand guide' : 'Charte Graphique',
        identity_three: english ? 'Business Card' : 'Cartes de visites',
        identity_four: english ? 'Stationery' : 'Papeterie',

        design_one : english ? 'Website design' : 'Maquette de site web',
        design_two : english ? 'App design' : 'Application mobile',
        design_three : english ? 'Social media design' : 'Visuels pour réseaux sociaux',

        packaging_one: english ? 'Packaging design' : 'Design de packaging',
        packaging_two: english ? 'Book and album cover design' : 'Couverture d’album/livre',
        packaging_three: english ? 'Menu design' : 'Menu de restaurant',
    }

    return (
        <div className={classes.presentation}>
            <div className={classes.squares}>
                <div className={classes.square}>
                    <div className={classes.square_header}>
                        <div className={classes.square_header_logo} style={{backgroundImage: `url(${imgBranding})`}}></div>
                        <div className={classes.square_header_title}>{text.identity}</div>
                    </div>
                    <div className={classes.square_description}>
                        <div className={classes.square_description_text}>{text.identity_one}</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>{text.identity_two}</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>{text.identity_three}</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>{text.identity_four}</div>
                    </div>
                </div>
                <div className={classes.square}>
                    <div className={classes.square_header}>
                        <div className={classes.square_header_logo} style={{backgroundImage: `url(${imgWeb})`}}></div>
                        <div className={classes.square_header_title}>Web Design</div>
                    </div>
                    <div className={classes.square_description}>
                        <div className={classes.square_description_text}>{text.design_one}</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>{text.design_two}</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>{text.design_three}</div>
                    </div>
                </div>
                <div className={classes.square}>
                    <div className={classes.square_header}>
                        <div className={classes.square_header_logo} style={{backgroundImage: `url(${imgPackaging})`}}></div>
                        <div className={classes.square_header_title}>Packaging</div>
                    </div>
                    <div className={classes.square_description}>
                        <div className={classes.square_description_text}>{text.packaging_one}</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>{text.packaging_two}</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>{text.packaging_three}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation;
