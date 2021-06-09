import React from 'react'
import { useEffect, useState} from 'react';
import { CenteredContainer } from '../__layout/Containers';
import classes from './Contact.module.scss';
import MerciDiv from '../__multiple/Merci';
import pdf from '../../assets/docs/questionnaire.pdf';

function Contact(props) {

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
                attachment: '',
                message: '',
            }));
        }, 2000)

    }
        
    return (    
        <CenteredContainer>
            <div className={classes.container}>
                <div className={classes.email}>contact@enolalouge.com</div>
                <form className={classes.form} onSubmit={handleSubmit} action="https://formsubmit.co/michel.lamarliere@icloud.com" method="POST" encType="multipart/form-data" target="frame">  
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_subject" value="Nouveau message !"></input>
                    <input type="text" id="name" name="name" placeholder="Nom" onChange={handleInputChange} value={formValues.name} required></input>
                    <input type="email" id="email" name="email" placeholder="Email" onChange={handleInputChange} value={formValues.email} required></input>
                    <input type="file" id ="attachment" name="attachment" accept="image/png, image/jpeg pdf" onChange={handleInputChange} value={formValues.attachment} required></input>
                    <textarea id="message" name="message" rows="4" placeholder="Message" onChange={handleInputChange} value={formValues.message} required></textarea>
                    <div className={classes.envoye}>
                        <button type="submit">Envoyer</button>
                        {sent && <div className={classes.envoye_text}>Message Envoyé !</div>}
                    </div>
                </form>
                <div className={classes.pdf}>
                Questionnaire client à télécharger
                    <div className={classes.pdf_logo}>
                        <a href={pdf} className={classes.pdf_link} download></a>
                    </div>
                </div>
                <MerciDiv/>
                <iframe name="frame" title="frame"></iframe>
            </div>
        </CenteredContainer>
    )
}

export default Contact;