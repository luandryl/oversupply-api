import express from  'express'
import ProductsController from '../controllers/Products.Controller'

let router = express.Router()
let product = new ProductsController()

router.get('/all-products/', (req, res) => {
    product.readAllProducts(req, res)
})

router.get('/by-id/:id', (req, res) => {
    product.readProductById(req, res)
})

router.post('/', (req, res) => {
    product.save(req, res)
})

router.put('/', (req, res) => {
    product.update(req, res)
})

router.delete('/', (req, res) => {
    product.delete(req, res)
})

export default router
