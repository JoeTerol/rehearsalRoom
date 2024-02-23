const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler }= require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});


// app.get('/categories/:categoryId/products/:productId', (req, res)=> {
//   const { categoryId, productId } = req.params;
//   res.json ({
//     categoryId,
//     productId
//   });
// });
// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if(limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   }else {
//     res.send('no hay parametros');
//   }

// })
routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
