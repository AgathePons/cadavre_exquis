const client = require('./dbClient');

const dataMapper = {
  async getAllNouns() {
    try {
      const query = 'SELECT label FROM noun;';
      const data = (await client.query(query)).rows;
      if (!data) {
        const errorMsg = 'No data found';
        return errorMsg;
      }
      return data;
    } catch (err) {
      console.error('getAllNouns error:', err);
      const catchErrorMsg = 'Error catched in console';
      return catchErrorMsg;
    }
  },
  async getOneNoun(index) {
    try {
      const query = `SELECT * FROM noun WHERE noun.id=${index}`;
      const data = await client.query(query).rows[0];
      if (!data) {
        const errorMsg = 'No data found';
        return errorMsg;
      }
      return data;
    } catch (err) {
      console.error('getOneNoun error:', err);
      const catchErrorMsg = 'Error catched in console';
      return catchErrorMsg;
    }
  },
  // end dbConnect
  closeDb() {
    client.end();
  },
};

module.exports = dataMapper;
