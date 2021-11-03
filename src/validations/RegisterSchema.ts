import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail invalido.").required("Campo obrigatório."),
  password: yup
    .string()
    .min(6, "Deve ter pelo menos 6 caracteres")
    .required("Campo obrigatório."),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas não são iguais.")
    .required("Campo obrigatório."),
});

export default schema;
