const express = require('express')
const handlebars = require('express-handlebars')
const morgan = require('morgan')
const path = require('path')


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))

//http loger
// app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

console.log("PATH: ", path.join(__dirname, 'resources/views'))

app.use(express.urlencoded({
  extended: true
})) //TH gửi thông tin qua dạng form html
app.use(express.json()) // TH gửi từ code JS

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  // console.log(req.query)
  res.render('news');
});

app.get("/search", (req, res) => {
  res.render("search")
});

app.post("/search", (req, res) => {
  console.log(req.body)
  res.send("ok")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
