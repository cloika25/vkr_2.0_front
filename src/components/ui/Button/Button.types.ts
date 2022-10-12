export interface ButtonProps {
  /** Тайтл кнопки */
  title: string;
  /** Доп стили */
  className?: string;
  /** Обработчик нажатия */
  onClick?: () => void;
  /** Находится ли кнопка в состоянии загрузки */
  isLoading?: boolean;
}
