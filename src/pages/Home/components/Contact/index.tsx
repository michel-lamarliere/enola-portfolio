import React, { useEffect, useRef, useState } from "react";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import { object, string } from "yup";
import { ClipLoader } from "react-spinners";

import { useHttp } from "services/httpStore";

import Input, { InputTypes } from "./components/Input";
import RoundedButton, {
  RoundedButtonTypes,
} from "components/uiElements/RoundedButton";

import emailIcon from "assets/icons/email.svg";
import telephoneIcon from "assets/icons/telephone.svg";
import addressIcon from "assets/icons/address.svg";

import classes from "./styles.module.scss";

const contactInfo: { text: string; icon: string }[] = [
  {
    text: "contact@enolalouge.com",
    icon: emailIcon,
  },
  {
    text: "+33 06 08 66 01 99",
    icon: telephoneIcon,
  },
  {
    text: "Toulouse, 31000",
    icon: addressIcon,
  },
];

const serverError = {
  waiting: false,
  success: false,
  message:
    "Erreur lors de l'envoi. Veuillez réessayer plus tard ou m'envoyer un mail.",
};

const Contact: React.FC = () => {
  const location = useLocation();
  const formRef = useRef<any>(null);

  const { Http } = useHttp();

  useEffect(() => {
    if (!formRef.current) {
      return;
    }

    if (location.pathname === "/accueil/contact") {
      setTimeout(() => {
        formRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }, 300);
    }
  }, [formRef, location]);

  const [serverResponse, setServerResponse] = useState({
    waiting: false,
    success: true,
    message: "",
  });

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

  const formSubmitHandler = async (inputValues: any, actions: any) => {
    setServerResponse((prev) => ({ ...prev, waiting: true }));

    const response = await Http.submitForm({
      language: "french",
      name: inputValues.name,
      email: inputValues.emailAddress,
      message: inputValues.message,
    });

    if (!response.ok) {
      setServerResponse(serverError);

      return;
    }

    actions.resetForm();

    setServerResponse({
      waiting: false,
      success: true,
      message: "Message envoyé.",
    });
  };

  useEffect(() => {
    if (serverResponse.message.length > 0) {
      const serverResponseTimeout = setTimeout(() => {
        setServerResponse((prev) => ({ ...prev, message: "" }));
      }, 3000);

      return () => {
        clearTimeout(serverResponseTimeout);
      };
    }
  }, [serverResponse]);

  return (
    <div className={classes.wrapper} id={"contact"} ref={formRef}>
      <div className={classes.details}>
        <div className={classes.details__title}>
          N’hésitez-pas à me contacter !
        </div>
        <div className={classes.details__description}>
          Vous souhaitez me parler de vive voix ? Je serai ravie de vous
          proposer un appel, une visio ou une rencontre !
        </div>
        <div className={classes["details__contact-info"]}>
          {contactInfo.map((info, index) => (
            <div
              className={classes["details__contact-info__item"]}
              key={+index}
            >
              <img
                src={info.icon}
                alt={info.text}
                className={classes["details__contact-info__item__icon"]}
              />
              <div className={classes["details__contact-info__item__text"]}>
                {info.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.form}>
        <div className={classes.form__title}>
          Besoin d’un renseignement ou d’un devis ? Dites-moi tout !
        </div>
        <Formik
          initialValues={{
            name: "",
            emailAddress: "",
            message: "",
          }}
          onSubmit={(inputValues, actions) => {
            formSubmitHandler(inputValues, actions);
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
            <form className={classes.form__form}>
              <Input
                type={InputTypes.TEXT}
                name={"Name"}
                placeholder={"Nom, Prénom"}
                value={values.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                errorText={errors.name ? errors.name : ""}
                touched={touched.name ? touched.name : false}
              />
              <Input
                type={InputTypes.TEXT}
                name={"emailAddress"}
                placeholder={"Adresse mail"}
                value={values.emailAddress}
                onChange={handleChange("emailAddress")}
                onBlur={handleBlur("emailAddress")}
                errorText={errors.emailAddress ? errors.emailAddress : ""}
                touched={touched.emailAddress ? touched.emailAddress : false}
              />
              <Input
                type={InputTypes.TEXTAREA}
                name={"Message"}
                placeholder={"Message"}
                value={values.message}
                onChange={handleChange("message")}
                onBlur={handleBlur("message")}
                errorText={errors.message ? errors.message : ""}
                touched={touched.message ? touched.message : false}
              />
              {serverResponse.message.length > 0 && (
                <div
                  className={`${classes["form__form__server-response"]} ${
                    !serverResponse.success &&
                    classes["form__form__server-response--error"]
                  }`}
                >
                  {serverResponse.message}
                </div>
              )}
              <div className={classes["form__form__button-spinner"]}>
                <RoundedButton
                  className={classes["form__form__button-spinner__button"]}
                  text={"Envoyer"}
                  type={RoundedButtonTypes.BUTTON}
                  onClick={handleSubmit}
                  disabled={serverResponse.waiting}
                />
                {serverResponse.waiting && (
                  <ClipLoader
                    color={"#FF96D6"}
                    size={25}
                    className={classes["form__form__button-spinner__spinner"]}
                  />
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
