import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Container } from '../components/Flex';
import { Button, TextField } from '../components/ui';
import { AuthService } from '../services/AuthService';
import { setToken } from '../services/utils';
import { LoginRequest } from '../types/Authorization';

interface LoginProps {
}

const Login: React.FC<LoginProps> = () => {
  const { register, handleSubmit } = useForm<LoginRequest>();

  const onValidHandler: SubmitHandler<LoginRequest> = async (formValue) => {
    const token = await AuthService.login(formValue);
    setToken(token.access_token);
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
          {...register('login')}
          label="Логин"
        />
        <TextField
          {...register('password')}
          label="Пароль"
        />
        <Button type="submit">
          Войти
        </Button>
      </form>
    </Container>
  );
};
export default Login;
