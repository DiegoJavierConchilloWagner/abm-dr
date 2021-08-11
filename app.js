const express = require('express'),
      path = require('path'),
      mysql = require('mysql');

const app = express();

// importing routes
const userRoutes = require('./routes/user');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// middlewares
app.use(express.urlencoded({extended: false}));

// routes
app.use('/', userRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

//importing DB
const dbConection = require('./database/configDB');

//DB conection
app.use('/', dbConection);
