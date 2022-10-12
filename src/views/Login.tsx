import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '../components/Flex';
import { TextField } from '../components/ui';

interface LoginProps {
}

const Login: React.FC<LoginProps> = () => {
  const { register } = useForm();

  return (
    <Container
      className="bg-bgDefault"
      flex="1"
    >
      <form className="m-auto flex flex-col bg-bgDefault p-6 loginForm gap-2">
        <TextField
          {...register('login')}
          label="Логин"
        />
        <TextField
          {...register('password')}
          label="Пароль"
        />
      </form>
    </Container>
  );
};
export default Login;
