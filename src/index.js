const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')


const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')))

//http loger
// app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// rotues init
route(app);

app.use(express.urlencoded({
  extended: true
})) //TH gửi thông tin qua dạng form html
app.use(express.json()) // TH gửi từ code JS



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
