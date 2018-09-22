
const userName = process.env.MONGO_DB_ADMIN_USER_NAME;
const userPassword = process.env.MONGO_DB_ADMIN_USER_PASSWORD;

module.exports = {
    mongoDbUri:`mongodb://${userName}:${userPassword}@ds235732.mlab.com:35732/dombigreta`
} 