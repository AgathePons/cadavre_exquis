const debug = require('debug')('DataMapper');
const client = require('./dbClient');

const dataMapper = {
  async getAllNouns() {
    debug('getAllNouns called');
    console.log('datamapper');
    const query = 'SELECT label FROM noun;';
    const data = (await client.query(query)).rows;
    if (!data) {
      const errorMsg = 'No data found';
      return errorMsg;
    }
    return data;
  },
  async getOneNoun(index) {
    debug('getOneNoun called');
    const query = `SELECT * FROM noun WHERE noun.id=${index}`;
    const data = await client.query(query).rows[0];
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
  // end dbConnect
  closeDb() {
    client.end();
  },
};

module.exports = dataMapper;
