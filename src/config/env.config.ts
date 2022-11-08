export const envConfiguration = () => ({
  environment: process.env.NODE_ENV || 'development',
  mongodb: process.env.MONGODB,
  port: +process.env.PORT || 3000,
  defaultPagLimit: +process.env.DEFAULT_PAG_LIMIT || 10,
});
