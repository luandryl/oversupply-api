import ProductModel from '../models/Products.Model'

export default class ProductsController {

    constructor () {
        this._productsModel = new ProductModel()
    }

    save (req, res) {
        this._productsModel.createProduct(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'Product not saved in database'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }

    readAllProducts(req, res) {
        this._productsModel.readAllProducts().then(data => {
            if (data) {
                res.send(data)
                res.status(200)
                res.end()
              } else {
                res.send({
                  msg: 'No products in database'
                })
                res.status(200)
                res.end()
              }
        }).catch(e => {
            console.log(e)
        })
    }

    readProductById(req, res) {
        let product = {
            cod_prod: req.params.id
        }
        this._productsModel.readById(product).then(data => {
            if (data) {
                res.send(data)
                res.status(200)
                res.end()
              } else {
                res.send({
                  msg: 'No products in database'
                })
                res.status(200)
                res.end()
              }
        }).catch(e => {
            console.log(e)
        })
    }

    update(req, res) {
        this._productsModel.updateProduct(req.body).then(data => {
            if (data) {
                res.send(data)
                res.status(200)
                res.end()
              } else {
                res.send({
                  msg: 'Product not Updated'
                })
                res.status(200)
                res.end()
              }
        }).catch(e => {
            console.log(e)
        })
    }

    delete(req, res) {
      let product = {
        cod_prod: req.params.id
      }
        this._productsModel.delete(product).then(data => {
            if (data) {
                res.send(data)
                res.status(200)
                res.end()
              } else {
                res.send({
                  msg: 'Product not deleted'
                })
                res.status(200)
                res.end()
              }
        }).catch(e => {
            console.log(e)
        })
    }
}