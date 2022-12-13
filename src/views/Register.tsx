import { TextField } from '@mui/material';
import React from 'react';
import { SubmitHandler, useForm, Validate } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../components/Flex';
import { Button } from '../components/ui';
import { ValidationError } from '../enums';
import { AuthService } from '../services/AuthService';
import { setToken } from '../services/utils';
import { RegistrationForm } from '../types/Authorization';

interface RegisterProps {
}

const Register: React.FC<RegisterProps> = () => {
  const {
    register, handleSubmit, formState: { errors }, getValues,
  } = useForm<RegistrationForm>();

  const navigate = useNavigate();

  const onValidHandler: SubmitHandler<RegistrationForm> = async (formValue) => {
    const token = await AuthService.register(formValue);
    setToken(token.access_token);
    navigate('/');
  };

  const validateConfirmPassword: Validate<string> = (value) => {
    if (getValues('password') !== value) {
      return ValidationError.ConfirmPassword;
    }
    return undefined;
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
          error={!!errors.login}
          helperText={errors.login?.message}
          label="Логин"
          {...register('login', {
            required: ValidationError.RequiredField,
          })}
        />
        <TextField
          error={!!errors.email}
          helperText={errors.email?.message}
          label="Email"
          {...register('email', {
            required: ValidationError.RequiredField,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: ValidationError.EmailField,
            },
          })}
        />
        <TextField
          error={!!errors.name}
          helperText={errors.name?.message}
          label="Имя"
          {...register('name', { required: ValidationError.RequiredField })}
        />
        <TextField
          error={!!errors.surname}
          helperText={errors.surname?.message}
          label="Фамилия"
          {...register('surname', { required: ValidationError.RequiredField })}
        />
        <TextField
          error={!!errors.password}
          helperText={errors.password?.message}
          label="Пароль"
          type="password"
          {...register('password', { required: ValidationError.RequiredField })}
        />
        <TextField
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          label="Повторите пароль"
          type="password"
          {...register('confirmPassword', { validate: validateConfirmPassword })}
        />
        <Button
          type="submit"
          variant="outlined"
        >
          Зарегистрироваться
        </Button>
        <Link to="/login">Войти</Link>
      </form>
    </Container>
  );
};
export default Register;
