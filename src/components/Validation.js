import * as yup from "yup";

let validationSchema = yup.object().shape({
  name: yup.string("Geçerli bir isim girin!").required(),
  password: yup.string(7, "Paralonız minimum 7 karakter olmalıdır!").required(),
});

export default validationSchema;
