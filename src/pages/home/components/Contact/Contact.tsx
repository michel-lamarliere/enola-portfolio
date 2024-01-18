import React, { useEffect, useRef } from "react";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import { object, string } from "yup";
import { ClipLoader } from "react-spinners";
import cn from "classnames";

import { Input, InputTypes } from "pages/home/components/Contact/Input/Input";
import {
  RoundedButton,
  RoundedButtonTypes,
} from "components/RoundedButton/RoundedButton";
import { contactFormInputsKeys, useSendMessage } from "pages/home/api/contact";
import { Container } from "components/Container";

import emailIcon from "assets/icons/email.svg";
import telephoneIcon from "assets/icons/telephone.svg";
import addressIcon from "assets/icons/address.svg";

import styles from "pages/home/components/Contact/Contact.module.scss";

const contactInfo: { text: string; icon: string }[] = [
  {
    text: "contact@enolalouge.com",
    icon: emailIcon,
  },
  {
    text: "+33 06 17 23 93 57",
    icon: telephoneIcon,
  },
  {
    text: "Toulouse, 31000",
    icon: addressIcon,
  },
];

export const Contact = () => {
  const location = useLocation();
  const formRef = useRef<any>(null);

  const { mutation, serverResponse } = useSendMessage();

  useEffect(() => {
    if (!formRef.current) return;

    let timeout: any;
    if (location.hash.includes("#contact")) {
      timeout = setTimeout(() => {
        formRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }

    return () => {
      clearTimeout(timeout);

      if (window.location.hash) {
        window.history.replaceState(
          "",
          document.title,
          window.location.pathname
        );
      }
    };
  }, [formRef, location]);

  const formValidationSchema = object().shape({
    name: string()
      .trim()
      .min(2, "2 caractères minimum.")
      .max(30, "30 caractères maximum.")
      .required("Champ requis."),
    emailAddress: string()
      .trim()
      .email("Format invalide.")
      .required("Champ requis."),
    message: string()
      .trim()
      .min(10, "10 caractères minimum.")
      .max(200, "200 caractères maximum.")
      .required("Champ requis."),
  });

  return (
    <Container>
      <div className={styles.wrapper} ref={formRef}>
        <div className={styles.details}>
          <div className={styles.details_title}>
            N’hésitez-pas à me contacter !
          </div>
          <div className={styles.details_description}>
            Vous souhaitez me parler de vive voix ? Je serai ravie de vous
            proposer un appel, une visio ou une rencontre !
          </div>
          <div className={styles.details_contactInfo}>
            {contactInfo.map((info, index) => (
              <div className={styles.details_contactInfo_item} key={+index}>
                <img
                  src={info.icon}
                  alt={info.text}
                  className={styles.details_contactInfo_item_icon}
                />
                <div className={styles.details_contactInfo_item_text}>
                  {info.text}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.form_title}>
            Besoin d’un renseignement ou d’un devis ? Dites-moi tout !
          </div>
          <Formik
            initialValues={{
              name: "",
              emailAddress: "",
              message: "",
            }}
            onSubmit={(inputValues, actions) => {
              mutation.mutateAsync({ body: inputValues, formActions: actions });
            }}
            validationSchema={formValidationSchema}
          >
            {({
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
              handleSubmit,
            }) => (
              <form className={styles.form_form}>
                <Input
                  type={InputTypes.TEXT}
                  name={"Name"}
                  placeholder={"Nom, Prénom"}
                  value={values.name}
                  onChange={handleChange(contactFormInputsKeys.name)}
                  onBlur={handleBlur(contactFormInputsKeys.name)}
                  errorText={errors.name ? errors.name : ""}
                  touched={touched.name ? touched.name : false}
                />
                <Input
                  type={InputTypes.TEXT}
                  name={"emailAddress"}
                  placeholder={"Adresse mail"}
                  value={values.emailAddress}
                  onChange={handleChange(contactFormInputsKeys.emailAddress)}
                  onBlur={handleBlur(contactFormInputsKeys.emailAddress)}
                  errorText={errors.emailAddress ? errors.emailAddress : ""}
                  touched={touched.emailAddress ? touched.emailAddress : false}
                />
                <Input
                  type={InputTypes.TEXTAREA}
                  name={"Message"}
                  placeholder={"Message"}
                  value={values.message}
                  onChange={handleChange(contactFormInputsKeys.message)}
                  onBlur={handleBlur(contactFormInputsKeys.message)}
                  errorText={errors.message ? errors.message : ""}
                  touched={touched.message ? touched.message : false}
                />
                {serverResponse && (
                  <div
                    className={cn(styles.form_form_serverResponse, {
                      [styles.form_form_serverResponse__error]:
                        mutation.isError,
                    })}
                  >
                    {serverResponse}
                  </div>
                )}
                <div className={styles.form_form_buttonSpinner}>
                  <RoundedButton
                    className={styles.form_form_buttonSpinner__button}
                    text={"Envoyer"}
                    type={RoundedButtonTypes.BUTTON}
                    onClick={handleSubmit}
                    disabled={mutation.isLoading}
                  />
                  {mutation.isLoading && (
                    <ClipLoader
                      color={"#FF96D6"}
                      size={25}
                      className={styles.form_form_buttonSpinner__spinner}
                    />
                  )}
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </Container>
  );
};
