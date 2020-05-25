const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;
const Store = require('../store/redis')

router.get('/:tabla', list);

async function list(req, res, next) {  
  const datos = await Store.list(req.params.tabla);

  res.status(200).send({
    error:false,
    status: 200,
    body: datos
})
};

app.use('/api/twets', router)

app.listen(port, function () {
  console.log(`Servidor corriendo en el puerto ${port}`)
})