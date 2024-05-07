import * as Yup from "yup";

export const personValidationSchema = Yup.object({
  fullName: Yup.string().required("Fullt navn er påkrevd"),
  email: Yup.string()
    .email("Ugyldig e-postadresse")
    .required("E-postadresse er påkrevd"),
  street: Yup.string().required("Gate er påkrevd"),
  city: Yup.string().required("By er påkrevd"),
  postalCode: Yup.string()
    .matches(/^[0-9]+$/, "Postnummer må være heltall")
    .required("Postnummer er påkrevd"),
  country: Yup.string().required("Land er påkrevd"),
});
