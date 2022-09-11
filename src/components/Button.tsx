import React from 'react';

interface Props {
  /** Тайтл кнопки */
  title: string;
  /** Доп стили */
  className?: string;
  /** Обработчик нажатия */
  onClick?: () => void;
  /** Находится ли кнопка в состоянии загрузки */
  isLoading?: boolean;
}

/** Кнопка */
const Button: React.FC<Props> = ({
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
