import classes from './Presentation.module.scss';
import imgBranding from '../../assets/img/branding.svg'
import imgWeb from '../../assets/img/web.svg'
import imgPrint from '../../assets/img/print.svg'

function Presentation() {
    return (
        <div className={classes.presentation}>
            <div className={classes.squares}>
                <div className={classes.square}>
                    <div className={classes.square_logo} style={{backgroundImage: `url(${imgBranding})`}}></div>
                    <div className={classes.square_title}>Identité visuelle</div>
                    <div className={classes.square_description}>Création de logotype<br/>Charte graphique<br/>Cartes de visites<br/>Entête de lettre</div>
                </div>
                <div className={classes.square}>
                    <div className={classes.square_logo} style={{backgroundImage: `url(${imgWeb})`}}></div>
                    <div className={classes.square_title}>Supports web</div>
                    <div className={classes.square_description}>Maquette de site web<br />Application mobile<br />Visuels pour réseaux sociaux</div>
                </div>
                <div className={classes.square}>
                    <div className={classes.square_logo} style={{backgroundImage: `url(${imgPrint})`}}></div>
                    <div className={classes.square_title}>Impression</div>
                    <div className={classes.square_description}>Packaging<br />Illustrations<br />Magazines, livres<br />Flyers, menus</div>
                </div>
            </div>
        </div>
    )
}

export default Presentation;