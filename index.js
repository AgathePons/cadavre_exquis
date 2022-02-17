require('dotenv').config();
// on a extrait app qu'on a mis dans un autre fichier et exporté, pour pouvoir le test sans lancer le app.listen
const app = require('./app/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
