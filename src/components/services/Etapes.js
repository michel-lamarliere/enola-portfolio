import classes from './Etapes.module.scss';
import pdf from '../../assets/docs/questionnaire.pdf'
import { Link } from 'react-router-dom';

function Etapes() {
    return (
        <div className={classes.etapes}>
            <div className={classes.etapes_title}>LES ÉTAPES</div>
            <div className={classes.squares}>
                <div className={classes.squares_square}>
                    <div className={classes.squares_square_title}>Contact</div>
                    <div className={classes.squares_square_text}>
                    <div>1. Vous pouvez téléchargez mon <a href={pdf} target="_blank" rel="noreferrer" className={classes.squares_square_text_link} download>questionnaire</a>, et me le renvoyez remplis&nbsp;
                        <Link to="/contact" className={classes.squares_square_text_link}>ici</Link>.</div>
                        <div>2. Après avoir évalué vos besoins, je vous propose un devis.</div>
                        <div>3. Si celui-ci vous convient, le contrat est prêt à être signé. Le versement d’un acompte vous sera demandé.</div>
                    </div>
                </div>
                <div className={classes.squares_square_b}>
                    <div className={classes.squares_square_title}>Planning</div>
                    <div className={classes.squares_square_text}>
                        <div>4. Il est temps de nous rencontrer. Je vous propose un appel téléphonique, ou un appel vidéo.</div>
                        <div>5. Ensemble nous allons créer le mood board de votre projet qui sera la base de toute mon étape de création.</div>
                    </div>
                </div>
                <div className={classes.squares_square}>
                    <div className={classes.squares_square_title}>Création</div>
                    <div className={classes.squares_square_text}>
                        <div>6. Je créer au minimum deux designs différents pour chaque service requis.</div>
                        <div>7. Je vous présente mes créations et m’adapte jusqu’à ce que vous trouviez le design qui vous convient.</div>
                    </div>
                </div>
                <div className={classes.squares_square_b}>
                    <div className={classes.squares_square_title}>Finalisation</div>
                    <div className={classes.squares_square_text}>
                        <div>8. Une fois que tout est approuvé il ne me reste plus qu’à vous envoyer les éléments dans les formats adéquates.</div>
                        <div>9. Je vous fournis également un PDF qui explique comment utiliser tous ces documents.</div>
                        <div>10. À présent vous pouvez gérer ces créations en toute autonomie.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Etapes;