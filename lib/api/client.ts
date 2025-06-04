import axios from 'axios';
import queryString from 'query-string';

import { env } from '@/utils/env';

export const privateApiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  paramsSerializer: (params) => queryString.stringify(params),
});

const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

export default apiClient;