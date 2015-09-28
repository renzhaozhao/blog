var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var ejs = require('ejs');


var routes = require('./routes/index');

var settings = require('./settings');
var flash = require('connect-flash');

var app = express();

// view engine setup
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html',ejs.__express);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname)));



app.use(session({
    secret: settings.cookieSecret,
    key: settings.db,//cookie name
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 30},//30 days
        store: new MongoStore({
        db: settings.db,
        host: settings.host,
        port: settings.port
    })
}));
app.use(flash());

routes(app);

var server = app.listen(app.get('port'),function(){
    console.log("请访问 "+app.get('port'));
});


module.exports = app;
