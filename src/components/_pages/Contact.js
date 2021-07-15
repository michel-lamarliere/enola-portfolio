import React from 'react'
import { useEffect, useState} from 'react';
import { CenteredContainer } from '../__layout/Containers';
import classes from './Contact.module.scss';
import MerciDiv from '../__multiple/Merci';
import pdf from '../../assets/docs/questionnaire.pdf';
import pdf_en from '../../assets/docs/english_questionnaire.pdf';
import { useLanguage } from '../../translations/LanguageContext.js';

function Contact(props) {
    const english = useLanguage();

    const [sent, setSent ] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        attachment: '',
        message: '',
    });

    useEffect(() => {
		window.scrollTo(0, 0)
    }, [])

    const handleInputChange = (event) => {
        setFormValues((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        setSent(true);

        setTimeout(() => {
            setSent(false);
            setFormValues(() => ({
                name: '',
                email: '',
                attachments: '',
                message: '',
            }));
        }, 2000)
    }

    const text = {
        input_name: english ? 'Name' : 'Nom',
        input_email: english ? 'Email Address' : 'Email',
        button_send: english ? 'Send' : 'Envoyer',
        sent: english ? 'Message Sent!' : 'Message Envoyé',
        pdf: english ? 'Client questionnaire to download' : 'Questionnaire client à télécharger',
    }

    return (
        <CenteredContainer>
            <div className={classes.container}>
                <div className={classes.email}>contact@enolalouge.com</div>
                <form className={classes.form} onSubmit={handleSubmit} action="https://formsubmit.co/enola.louge@icloud.com" method="POST" encType="multipart/form-data" target="frame">
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_subject" value="Nouveau message !"></input>
                    <input type="text" id="name" name="name" placeholder={text.input_name} onChange={handleInputChange} value={formValues.name} required></input>
                    <input type="email" id="email" name="email" placeholder={text.input_email} onChange={handleInputChange} value={formValues.email} required></input>
                    <textarea id="message" name="message" rows="4" placeholder="Message" onChange={handleInputChange} value={formValues.message} required></textarea>
                    <input type="file" id="attachment" name="attachment" multiple="multiple" accept="image/png, image/jpeg pdf" onChange={handleInputChange} value={formValues.attachment}></input>
                    <div className={classes.envoye}>
                        <button type="submit">{text.button_send}</button>
                        {sent && <div className={classes.envoye_text}>{text.sent}</div>}
                    </div>
                </form>
                <div className={classes.pdf}>
                {text.pdf}
                    <div className={classes.pdf_logo}>
                        { english ?
                            <a href={pdf_en} className={classes.pdf_link} download></a>
                            : <a href={pdf} className={classes.pdf_link} download></a>}
                    </div>
                </div>
                <MerciDiv/>
                <iframe name="frame" title="frame"></iframe>
            </div>
        </CenteredContainer>
    )
}

export default Contact;
