var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var todosRouter = require('./routes/todos');

const mongoose = require('mongoose');

require('dotenv').config({path: __dirname + '/.env'});

var app = express();

mongoose.connect(process.env['CONNECTION'], {useNewUrlParser: true, useUnifiedTopology: true});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/todos', todosRouter);



const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    // Like the one described here: https://swagger.io/specification/#infoObject
    info: {
      title: 'Todos API',
      version: '1.0.0',
      description: 'Todo API demo',
    },
  },
  // List of files to be processes. You can also set globs './routes/*.js'
  apis: ['./routes/*.js'],
};

const specs = swaggerJsdoc(options);
const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
