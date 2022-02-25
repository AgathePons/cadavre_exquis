const client = require('./dbClient');

const dataMapper = {
  async getAllNouns() {
    try {
      const query = 'SELECT label FROM noun;';
      return (await client.query(query)).rows;
    } catch (err) {
      console.error('Error:', err);
    }
  },
  async getOneNoun(index) {
    try {
      const query = `SELECT * FROM noun WHERE noun.id=${index}`;
      return (await client.query(query)).rows[0];
    } catch (err) {
      console.error('Error:', err);
    }
  },
};

module.exports = dataMapper;
