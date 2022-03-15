var express = require("express")
var app = express();
var router = express.Router();
const ProdutoController = require('../controllers/ProdutoController')


router.get('/', ProdutoController.mostrar);


module.exports = router;