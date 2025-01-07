import axios from 'axios';
import env from '@env';

const httpClient = axios.create({
  baseURL: env.ENDPOINT_BASE_URL
})

export default httpClient;