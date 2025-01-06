export interface Env {
  APP_ENV: string;
  LOG_LEVEL: string;
}

const env: Env = {
  APP_ENV: process.env.REACT_APP_ENV || 'production',
  LOG_LEVEL: process.env.REACT_APP_LOG_LEVEL || 'info',
};

export default env;