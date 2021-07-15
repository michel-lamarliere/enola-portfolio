import classes from './Etapes.module.scss';
import pdf from '../../assets/docs/questionnaire.pdf'
import pdf_en from '../../assets/docs/english_questionnaire.pdf';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../translations/LanguageContext.js';

function Etapes() {

    const english = useLanguage();

    const text = {
        process: english ? 'THE PROCESS' : 'LES ÉTAPES',

        contact_one_one: english ? '1. You can download my ' : '1. Vous pouvez télécharger mon ',
        contact_one_two: english ? ', and send it back to me completed ' : ', et me le renvoyer remplis ',
        contact_one_three: english ? 'here' : 'ici',

        contact_two: english ? '2. After assessing your needs, I offer you a quote.' : '2. Après avoir évalué vos besoins, je vous propose un devis.',
        contact_three : english ? '3. If it suits you, the contract is ready to be signed. A down payment will be required.' : '3. Si celui-ci vous convient, le contrat est prêt à être signé. Le versement d’un acompte vous sera demandé.',

        communication_one: english ? '4. It’s time for us to exchange. I would suggest a phone call or video call.' : '4. Il est temps de nous rencontrer. Je vous propose un appel téléphonique, ou un appel vidéo.',
        communication_two: english ? '5. Together we create the mood-board of your project which will be the foundation of my entire creation process.' : '5. Ensemble nous allons créer le mood board de votre projet qui sera la base de toute mon étape de création.',

        creation: english ? 'Creation' : 'Création',
        creation_one: english ? '6. I create at least two different designs for each required service.' : '6. Je créer au minimum deux designs différents pour chaque service requis.',
        creation_two: english ? '7. I present to you my creations and then adjust until you find the design that fits you.' : '7. Je vous présente mes créations et m’adapte jusqu’à ce que vous trouviez le design qui vous convient.',

        sending: english ? 'Sending' : 'Envoi',
        sending_one: english ? '8. Once everything is approved, I will send to you the desired elements in the correct formats.' : '8. Une fois que tout est approuvé il ne me reste plus qu’à vous envoyer les éléments dans les formats adéquats.',
        sending_two: english ? '9. I provide you with a PDF which explains how to use all these documents.' : '9. Je vous fournis également un PDF qui explique comment utiliser tous ces documents.',
        sending_three: english ? '10. You can now manage these creations in complete autonomy.' : '10. À présent vous pouvez gérer ces créations en toute autonomie.',
    }

    return (
        <div className={classes.etapes}>
            <div className={classes.etapes_title}>{text.process}</div>
            <div className={classes.squares}>
                <div className={classes.squares_square}>
                    <div className={classes.squares_square_title}>Contact</div>
                    <div className={classes.squares_square_text}>
                    <div>{text.contact_one_one}
                    {english ?
                        <a href={pdf_en} target="_blank" rel="noreferrer" className={classes.squares_square_text_link} download>questionnaire</a>
                        : <a href={pdf} target="_blank" rel="noreferrer" className={classes.squares_square_text_link} download>questionnaire</a>
                    }
                    {text.contact_one_two}
                        <Link to="/contact" className={classes.squares_square_text_link}>{text.contact_one_three}</Link>.</div>
                        <div>{text.contact_two}</div>
                        <div>{text.contact_three}</div>
                    </div>
                </div>
                <div className={classes.squares_square_b}>
                    <div className={classes.squares_square_title}>Communication</div>
                    <div className={classes.squares_square_text}>
                        <div>{text.communication_one}</div>
                        <div>{text.communication_two}</div>
                    </div>
                </div>
                <div className={classes.squares_square}>
                    <div className={classes.squares_square_title}>{text.creation}</div>
                    <div className={classes.squares_square_text}>
                        <div>{text.creation_one}</div>
                        <div>{text.creation_two}</div>
                    </div>
                </div>
                <div className={classes.squares_square_b}>
                    <div className={classes.squares_square_title}>{text.sending}</div>
                    <div className={classes.squares_square_text}>
                        <div>{text.sending_one}</div>
                        <div>{text.sending_two}</div>
                        <div>{text.sending_three}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Etapes;
