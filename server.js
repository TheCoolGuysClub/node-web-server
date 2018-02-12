const express = require('express');
const hbs = require('hbs');

const app = express();
const path
 = require('path');

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, "views", "partials"));
// __dirname + "/views/partials"

// app.get('/about', (req, res) => {
//   //takes the file path first, the "/" just
//   // means the current thing, like paly.net/,
//   //then a callback
//   //which takes a request and response
//   //always call it req and res for consistency
//   res.sendFile(__dirname + "/public/index.html");
// })

app.get('/', (req, res) => {
  res.render('index.hbs', {
    school: 'Paly',
    name: 'jex',
    pageTitle: 'Home',
    year: new Date().getFullYear(),
  })
})

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    content: "display this",
    creator: 'jeremy',
    school: 'Gunn',
    pageTitle: 'About',
    year: new Date().getFullYear(),
  })
})

// app.use(express.static(__dirname + "/public"));


app.listen(3000, () => {
  console.log("serrver on port 3000");
})
