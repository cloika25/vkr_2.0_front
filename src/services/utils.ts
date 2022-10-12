export const tokenName = 'token';

export const setToken = (token: string) => localStorage.setItem(tokenName, token);

/** Токен авторизации */
export const getToken = () => localStorage.getItem(tokenName);

/** Очистка токена */
export const removeToken = () => localStorage.removeItem(tokenName);
