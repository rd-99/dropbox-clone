require('dotenv').config();

 const config = {
  port: process.env.PORT || 3000,
  dbUri: process.env.DB_URI,
};

const dbCredentials = {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
}

module.exports = {config , dbCredentials};