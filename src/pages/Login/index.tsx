import HomeCard from "../../components/HomeCard";
import { Container, LoginBox } from "./style";
import Button from "../../components/Button";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validations/LoginSchema";
import { useUser } from "../../providers/User";
import { Redirect, useHistory } from "react-router";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const history = useHistory<History>();

  const { handleLogin, token } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: yupResolver(schema) });

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <HomeCard />
      <LoginBox>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(handleLogin)}>
          <TextField
            label="E-mail"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          ></TextField>
          <TextField
            label="Senha"
            type="password"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          ></TextField>
          <Button>Logar</Button>
        </form>
        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
        <Button onClick={(_) => history.push("/register")} variant="secondary">
          Cadastrar
        </Button>
      </LoginBox>
    </Container>
  );
};

export default Login;
