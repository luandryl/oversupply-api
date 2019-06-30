import express from 'express'

import SalesController from '../controllers/Sales.Controller'

let router = express.Router()
let sale = new SalesController()

router.get('/all/', (req, res) => {
    sale.getAll(req, res)
})

router.get('/info/', (req, res) => {
    sale.getSales(req, res)
})

router.get('/by-id/:id', (req, res) => {
    sale.getById(req, res)
})

router.post('/', (req, res) => {
    sale.save(req, res)
})

router.delete('/:id', (req, res) => {
    sale.delete(req, res)
})

export default router