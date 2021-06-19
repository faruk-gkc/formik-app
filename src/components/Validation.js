import * as yup from "yup";

let validationSchema = yup.object().shape({
  name: yup.string().min(3, "İsminiz mininum 2 karakter olmalıdır.").required(),
  password: yup
    .string()
    .min(7, "Paralonız minimum 7 karakter olmalıdır!")
    .required(),
});

export default validationSchema;
