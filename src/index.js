const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const methodOverride = require('method-override')

const app = express();
const port = 3001;

const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

//http loger
// app.use(morgan('combined'));

//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

app.use(
    express.urlencoded({
        extended: true,
    }),
); //TH gửi thông tin qua dạng form html

app.use(express.json()); // TH gửi từ code JS


app.use(methodOverride("_method"))


// rotues init
route(app);


app.listen(port, () => {
    console.log(`App listening on  http://127.0.0.1:${port}`);
});
