export const tokenName = 'token';

export const setToken = (token: string) => localStorage.setItem(tokenName, token);

/** Токен авторизации */
export const getToken = () => localStorage.getItem(tokenName);

/** Очистка токена */
export const removeToken = () => localStorage.removeItem(tokenName);

/** Преобразование стилей в строку */
export const parseStyles = (rawStyles: string) => rawStyles
  .split('\n')
  .map((s) => s.trim())
  .filter((s) => (s !== '' && s !== 'undefined' && s !== 'false'))
  .join(' ');
