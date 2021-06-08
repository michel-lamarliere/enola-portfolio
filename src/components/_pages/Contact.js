import React from 'react'
import { useEffect, useState} from 'react';
import { CenteredContainer } from '../__layout/Containers';
import classes from './Contact.module.scss';
import MerciDiv from '../__multiple/Merci';
import pdf from '../../assets/docs/questionnaire.pdf';

function Contact(props) {

    const [sent, setSent ] = useState(false)
    
    useEffect(() => {
		window.scrollTo(0, 0)
    }, [sent])

    const clearInputs = () => {
        setTimeout(() => {
            setSent(false);
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('attachment').value = '';
            document.getElementById('message').value = '';
        }, 2000)
        console.log(sent);
    }
        
    return (    
        <CenteredContainer>
            <div className={classes.container}>
                <div className={classes.email}>contact@enolalouge.com</div>
                <form className={classes.form} action="https://formsubmit.co/enola.louge@icloud.com" method="POST" encType="multipart/form-data" target="frame">  
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name="_subject" value="Nouveau message !"></input>
                    <input type="text" id="name" name="name" placeholder="Nom" required></input>
                    <input type="email" id="email" name="email" placeholder="Email" required></input>
                    <input type="file" id ="attachment" name="attachment" accept="image/png, image/jpeg pdf"></input>
                    <textarea id="message" name="message" rows="4" placeholder="Message" style={{position: 'relative'}}></textarea>
                    <div className={classes.envoye}>
                        <button type="submit" onClick={() => {setSent(true) ; clearInputs()}}>Envoyer</button>
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