require('dotenv').config();
const { Client } = require('pg');

const client = new Client(process.env.PGURL);
client.connect();

module.exports = client;
