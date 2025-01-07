const env = {
  APP_ENV: process.env.REACT_APP_ENV || 'production',
  LOG_LEVEL: process.env.REACT_APP_LOG_LEVEL || 'info',
  ENDPOINT_BASE_URL: process.env.REACT_APP_ENDPOINT_BASE_URL || 'http://localhost:8080'
};

export default env;