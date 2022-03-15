const DB = require('../database/connection')


class Produto {

   async mostrarProduto() {
      try {
         let result = await DB.select().table('produto').orderBy('id', 'desc')
         return result
      } catch (error) {
         console.log(error)
      }
   }

}


module.exports = new Produto()