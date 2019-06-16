module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 2000,
  SERVER_NAMESPACE: process.env.SERVER_NAMESPACE || 'express:server',
  STATIC_RESOURCES_LOCATION: process.env.STATIC_RESOURCES_LOCATION || 'public',
  ORIGIN: process.env.ORIGIN || 'http://localhost:4000',
  MONGO_URL: process.env.MONGO_URL,
};
