import classes from './Presentation.module.scss';
import imgBranding from '../../assets/icons/branding.svg'
import imgWeb from '../../assets/img/web.svg'
import imgPackaging from '../../assets/icons/packaging.svg'

function Presentation() {
    return (
        <div className={classes.presentation}>
            <div className={classes.squares}>
                <div className={classes.square}>
                    <div className={classes.square_header}>
                        <div className={classes.square_header_logo} style={{backgroundImage: `url(${imgBranding})`}}></div>
                        <div className={classes.square_header_title}>Identité visuelle</div>
                    </div>
                    <div className={classes.square_description}>
                        <div className={classes.square_description_text}>Logotype</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>Charte graphique</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>Cartes de visites</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>Papeterie</div>
                    </div>
                </div>
                <div className={classes.square}>
                    <div className={classes.square_header}>
                        <div className={classes.square_header_logo} style={{backgroundImage: `url(${imgWeb})`}}></div>
                        <div className={classes.square_header_title}>Web Design</div>
                    </div>
                    <div className={classes.square_description}>
                        <div className={classes.square_description_text}>Maquette de site web</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>Application mobile</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>Visuels pour réseaux sociaux</div>
                    </div>
                </div>
                <div className={classes.square}>
                    <div className={classes.square_header}>
                        <div className={classes.square_header_logo} style={{backgroundImage: `url(${imgPackaging})`}}></div>
                        <div className={classes.square_header_title}>Packaging</div>
                    </div>
                    <div className={classes.square_description}>
                        <div className={classes.square_description_text}>Design de packaging</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>Couverture d'album/livre</div>
                        <div className={classes.square_description_dot}></div>
                        <div className={classes.square_description_text}>Menu de restaurant</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation;
