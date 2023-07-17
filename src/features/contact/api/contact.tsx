import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";

import { axios } from "libs/axios";
import { FormikHelpers } from "formik";

type ContactFormDTO = {
  name: string;
  emailAddress: string;
  message: string;
};

export type ContactFormInputs = {
  name: string;
  emailAddress: string;
  message: string;
};

export const contactFormInputsKeys = {
  name: "name",
  emailAddress: "emailAddress",
  message: "message",
};

const sendMessage = async (body: ContactFormDTO) => {
  return await axios.post("/form", body);
};

export const useSendMessage = () => {
  const [serverResponse, setServerResponse] = useState<string | null>(null);

  useEffect(() => {
    if (serverResponse) {
      setTimeout(() => {
        setServerResponse(null);
      }, 5000);
    }
  }, [serverResponse]);

  const mutation = useMutation({
    mutationKey: ["form"],
    mutationFn: (params: {
      body: ContactFormDTO;
      formActions: FormikHelpers<typeof contactFormInputsKeys>;
    }) => sendMessage(params.body),
    onError: () => {
      setServerResponse(
        "Erreur lors de l'envoi. Veuillez réessayer plus tard ou m'envoyer un mail."
      );
    },
    onSuccess: (data, variables, context) => {
      variables.formActions.resetForm();
      setServerResponse("Message envoyé.");
    },
  });

  return {
    mutation,
    serverResponse,
  };
};
