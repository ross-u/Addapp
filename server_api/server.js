const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const router = require('./router');
const mongoose = require('./db');

// Config variables
const { PORT, URI } = require('./config');

// Middleware
app.use(serve('./public/profile_images/'));
app.use(logger());
app.use(bodyParser());
app.use(router.routes());

(async () => {
  try {
    // Instantiate a Mongoose connection to the database, stored in `db.js`
    mongoose.connect( URI, { useNewUrlParser: true }, (err) => {
      if (err) return console.log(err);
      console.log(`Connected to the database.`);
    });

    app.listen( PORT, () => console.log(`Server running on port ${PORT}.`));
  } catch (error) {
    console.error('Error connecting to the db', error);
  }
})();