import axios from 'axios';
import { getToken } from './utils';

/** Базовый URL */
export const appApiUrl = process.env.REACT_APP_API_URL;

/** Базовые настройки axios */
export const ApiConnection = axios.create({
  baseURL: appApiUrl ?? '',
  headers: {
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

const unblobError = async (error: unknown) => (error instanceof Blob
  ? JSON.parse(await error.text())
  : error);

/** Порядок обработки ошибок ответа сервера */
ApiConnection.interceptors.response.use((response) => {
  if (response.status === 401 || response.status === 400) {
    throw response;
  }
  return response;
}, async (error) => {
  const errors = error?.response?.data;
  throw await unblobError(errors);
});

/** Вставка токена в хедер запроса */
ApiConnection.interceptors.request.use((config) => {
  const token = getToken();
  // eslint-disable-next-line no-param-reassign
  config.headers!.Authorization = token;
  return config;
});
