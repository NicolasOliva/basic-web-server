const hbs = require('hbs');
require('./hbs/helpers');
const express = require('express')
const app = express()

/* port heroku or port localhost (3000) */ 
const port = process.env.PORT || 3000;

/*middleware (todo este contenido siempre sera publico)*/
app.use(express.static(__dirname + '/public'));

/* Express hbs engine (permite para hacer las paginas dinamicas)*/ 
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
      nombre:'nico',
      anio: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
      anio: new Date().getFullYear()
  });
});
 
app.listen(3000,() => {
    console.log("in the port 3000");
})