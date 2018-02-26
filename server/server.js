const path = require ('path');
const express = require ('express');
//const hbs = require ('hbs');

const port = process.env.PORT || 3000;
const publicPath = path.join (__dirname, '../public');


//hbs.registerPartials (publicPath);

const app = express();

app.use (express.static(publicPath));

app.listen(port, () => {
  console.log (`Server is running on port ${port}`);
  console.log (publicPath);
})
