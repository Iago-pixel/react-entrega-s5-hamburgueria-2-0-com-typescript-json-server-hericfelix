import React from "react";
import HomeCard from "../../components/HomeCard";
import { Container, RegisterBox, TitleContainer } from "./style";
import Button from "../../components/Button";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "../../validations/RegisterSchema";
import { useUser } from "../../providers/User";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";

interface RegisterData {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const Register = () => {
  const { handleRegister, token } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({ resolver: yupResolver(schema) });

  if (token) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <HomeCard />
      <RegisterBox>
        <TitleContainer>
          <h3>Register</h3>
          <Link to="/login">Retornar para o login</Link>
        </TitleContainer>

        <form onSubmit={handleSubmit(handleRegister)}>
          <TextField
            label="Nome"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          ></TextField>
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
          <TextField
            label="Confirmar senha"
            type="password"
            {...register("confirm_password")}
            error={!!errors.confirm_password}
            helperText={errors.confirm_password?.message}
          ></TextField>
          <Button>Cadastrar</Button>
        </form>
      </RegisterBox>
    </Container>
  );
};

export default Register;
