import React from 'react';
import { ButtonProps } from './Button.types';

/** Кнопка */
const Button: React.FC<ButtonProps> = ({
  title, className, onClick, isLoading,
}) => (
  <button
    className={`
      bg-slate-200 border-4 border-slate-200 p-2 rounded-md 
      ${!isLoading && 'hover:border-slate-300'} 
      transition-all 
      ${className}
    `}
    disabled={isLoading}
    onClick={onClick}
    type="button"
  >
    <div className={isLoading ? 'animate-spin' : ''}>{isLoading ? 'Загрузка' : title}</div>
  </button>
);

export default Button;
