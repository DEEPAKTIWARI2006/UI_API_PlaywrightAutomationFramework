export const getEnv = () =>
    (process.env.TEST_ENV || 'qa').trim().toLowerCase();