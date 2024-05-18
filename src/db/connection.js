const { Pool } = require('pg');
const { dbCredentials } = require("../config/config")

const conn = new Pool({
    user : dbCredentials.user,
    host: dbCredentials.host,
    database: dbCredentials.database,
    password: dbCredentials.password,
    port: dbCredentials.port,

});

module.exports = conn;
