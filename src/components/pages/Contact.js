import { Component, useEffect } from 'react';
import { CenteredContainer } from '../layout/Containers';
import classes from './Contact.module.scss'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import MerciDiv from '../multiple/Merci';
import pdf from '../../assets/docs/questionnaire.pdf'


function Contact(props) {
    useEffect(() => {
		window.scrollTo(0, 0)
	  }, [])

    const [redirect, setRedirect] = useState(false)
        
    return (    
        <CenteredContainer extraClass={classes.container}>
            <div className={classes.email}>contact@enolalouge.com</div>
            <form className={classes.form} target="/thankyou" action="https://formsubmit.co/enola.louge@icloud.com" method="POST" encType="multipart/form-data">  
                <input type="hidden" name="_next" value="http://localhost:3000/thankyou"/>
                <input type="hidden" name="_captcha" value="false"></input>
                <input type="hidden" name="_subject" value="Nouveau message !"></input>
                <input type="text" id="name" name="name" placeholder="Nom" required></input>
                <input type="email" id="email" name="email" placeholder="Email" required></input>
                <input type="file" id ="attachment" name="attachment" accept="image/png, image/jpeg pdf"></input>
                <textarea id="message" name="message" rows="3" placeholder="Message" required></textarea>
                <button type="submit" onClick={setRedirect} props={props.okay}>Envoyer</button>
                {}
            </form>
            <div className={classes.pdf}>
            Questionnaire client à télécharger:
                <div className={classes.pdf_logo}>
                    <a href={pdf} className={classes.pdf_link} download></a>
                </div>
            </div>
            <MerciDiv/>
            <iframe title="frame" name="frame"></iframe>
        </CenteredContainer>
    )
}

export default Contact;