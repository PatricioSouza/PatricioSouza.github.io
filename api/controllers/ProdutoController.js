const Produto = require('../models/Produto')



class ProdutoController {

   async mostrar(req, res) {

      let produtos = await Produto.mostrarProduto()

      if(produtos != undefined) {
         return res.status(200).json(produtos)
      } else {
         return res.status(404).json({err: 'Produto não encontrado'})
      }

   }

}

module.exports = new ProdutoController()