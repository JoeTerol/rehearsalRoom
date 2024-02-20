const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res)=> {
  res.send('hola mi server en express');
});
app.get('/nuevaruta', (req,res) => {
  res.send('Hola, soy una nueva ruta');
});
app.get('/products', (req,res) => {
  res.json({
    name: 'turno 1',
    price: 9

  });
});

app.listen(port, () => {
  console.log('Mi port ' + port)
})
