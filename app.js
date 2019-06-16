const express = require('express');
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const passport = require('passport');

const path = require('path');

const { ORIGIN, STATIC_RESOURCES_LOCATION } = require('./utils/config');
const routes = require('./controllers');

const app = express();

app.use(
  cors({
    ORIGIN,
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'X-XSRF-TOKEN'],
    credentials: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cookieParser());
app.use(compression());
app.use(express.static(path.join(__dirname, STATIC_RESOURCES_LOCATION)));
app.use(passport.initialize());

app.use('/api', routes);
app.use('/api', (req, res) => {
  res.status(404).json({
    message: 'Resource not found!',
  });
});

module.exports = app;
