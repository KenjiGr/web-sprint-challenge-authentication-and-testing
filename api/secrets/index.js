module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'fallback', 
    BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 8,
    PORT: process.env.PORT || 3300
  }