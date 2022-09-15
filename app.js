const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');

//const passport = require('passport');
//const passportConfig = require('./src/config/passport');

const { sequelize } = require('./src/models');
// const accountRouter = require('./src/routes/accounts');
const addressRouter = require('./src/routes/addresses');
// const cartRouter = require('./src/routes/carts');
// const paymentRouter = require('./src/routes/payments');
const productRouter = require('./src/routes/products');


dotenv.config();
const app = express();

app.set('port', process.env.SERVER_PORT || 8080);

// DB 연결
sequelize.sync({ force: false })
  .then(() => {
    console.log('◆ DB Connect!');
  })
  .catch(e => {
    console.log(e);
  });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

//app.use(passport.initialize());
//passportConfig();


// Router
app.use('/api/products', productRouter);
app.use('/api/users/:userId/addresses', addressRouter);

// 404 Handler
app.use('*', (req, res, next) => {
  res.status(404).send('404 not found');
});

// error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
})

// Connect Server
app.listen(app.get('port'), () => {
  console.log(`Serving on port ${app.get('port')}`);
});