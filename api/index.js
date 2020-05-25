const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

app.get('/', (req, res) => {
  return res.send('Recibió un método GET');
});


app.listen(port, function () {
  console.log(`Servidor corriendo en el puerto ${port}`)
})