const debug = require('debug')('DataMapper');
const client = require('./dbClient');

const dataMapper = {
  async getAllNames() {
    debug('getAllNames called');
    const query = 'SELECT label FROM name;';
    const data = (await client.query(query)).rows;
    if (!data) {
      const errorMsg = 'No data found';
      return errorMsg;
    }
    return data;
  },
  async getAllAdjectives() {
    debug('getAllAdjectives called');
    const query = 'SELECT label FROM adjective;';
    const data = (await client.query(query)).rows;
    if (!data) {
      const errorMsg = 'No data found';
      return errorMsg;
    }
    return data;
  },
  async getAllVerbs() {
    debug('getAllVerbs called');
    const query = 'SELECT label FROM verb;';
    const data = (await client.query(query)).rows;
    if (!data) {
      const errorMsg = 'No data found';
      return errorMsg;
    }
    return data;
  },
  async getAllComplements() {
    debug('getAllComplements called');
    const query = 'SELECT label FROM complement;';
    const data = (await client.query(query)).rows;
    if (!data) {
      const errorMsg = 'No data found';
      return errorMsg;
    }
    return data;
  },
  async getOneValue(propName, value) {
    debug(`getOneValue called for prop: ${propName}, label: ${value}`);
    const query = {
      text: `SELECT * FROM ${propName} WHERE label=$1`,
      values: [value],
    };
    const data = (await client.query(query)).rows[0];
    return data;
  },
  async insertOneValue(propName, value) {
    debug(`insert new value: ${propName}: ${value}`);
    const query = {
      text: `INSERT INTO ${propName} (label) VALUES ($1)`,
      values: [value],
    };
    await client.query(query);
  },
  // end dbConnect
  closeDb() {
    client.end();
  },
};

module.exports = dataMapper;
