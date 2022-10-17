import { TextField } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../components/Flex';
import { Button } from '../components/ui';
import { ValidationError } from '../enums';
import { AuthService } from '../services/AuthService';
import { setToken } from '../services/utils';
import { LoginRequest } from '../types/Authorization';

interface LoginProps {
}

const Login: React.FC<LoginProps> = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginRequest>();

  const navigate = useNavigate();

  const onValidHandler: SubmitHandler<LoginRequest> = async (formValue) => {
    const token = await AuthService.login(formValue);
    setToken(token.access_token);
    navigate('/');
  };

  return (
    <Container
      className="bg-bgDefault"
      flex="1"
    >
      <form
        className="m-auto flex flex-col bg-bgDefault p-6 loginForm gap-2"
        onSubmit={handleSubmit(onValidHandler)}
      >
        <TextField
          {...register('login', { required: ValidationError.RequiredField })}
          error={!!errors.login}
          helperText={errors.login?.message}
          label="Логин"
        />
        <TextField
          {...register('password', { required: ValidationError.RequiredField })}
          error={!!errors.password}
          helperText={errors.password?.message}
          label="Пароль"
        />
        <Button type="submit">
          Войти
        </Button>
        <Link to="/register">Зарегистрироваться</Link>
      </form>
    </Container>
  );
};
export default Login;
