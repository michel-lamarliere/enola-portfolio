import React from 'react'
import { useEffect, useState} from 'react';
import classes from './Contact.module.scss';
import { CenteredContainer } from '../components/UI/Containers';
import { useLanguage } from '../store/language-context.js';
import MerciDiv from '../components/UI/Merci';
import { FormBtn } from '../components/UI/Buttons';
import Input, { Textarea } from '../components/UI/Input';
import pdf from '../assets/docs/questionnaire.pdf';
import pdf_en from '../assets/docs/english_questionnaire.pdf';

function Contact(props) {
    const english = useLanguage();

    const [sent, setSent ] = useState(false);

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        attachment: '',
        message: '',
    });

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
                    <Input type="hidden" name="_captcha" value="false" />
                    <Input type="hidden" name="_subject" value="Nouveau message !" />
                    <Input type="text" id="name" name="name" placeholder={text.input_name} onChange={handleInputChange} value={formValues.name} required />
                    <Input type="email" id="email" name="email" placeholder={text.input_email} onChange={handleInputChange} value={formValues.email} required />
                    <Textarea id="message" name="message" rows="4" placeholder="Message" onChange={handleInputChange} value={formValues.message} required/>
                    <Input type="file" id="attachment" name="attachment" multiple="multiple" accept="image/png, image/jpeg pdf" onChange={handleInputChange} value={formValues.attachments} />
                    <div className={classes.envoye}>
                        <FormBtn />
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
