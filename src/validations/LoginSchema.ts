import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email("E-mail invalido.").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export default schema;
