const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler }= require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('hola mi server en express');
});



routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' + port);
});
