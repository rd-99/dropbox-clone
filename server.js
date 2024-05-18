const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const createFileSchema = require("./src/db/init")
const conn = require("./src/db/connection")
const fileRoute = require("./src/routes/fileRoute")
// Middleware
//app.use(bodyParser.json());
app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '2mb' }));
app.use(cors());
app.use(fileRoute)

const {config} = require('./src/config/config');

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

createFileSchema();