import React from 'react';
import { Button as MButton } from '@mui/material';
import { ButtonProps } from './Button.types';

/** Кнопка */
const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <MButton {...props}>
    {children}
  </MButton>
);

export default Button;
