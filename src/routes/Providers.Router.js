import express from 'express'
import ProvidersController from '../controllers/Providers.Controller'

let router = express.Router()
let provider = new ProvidersController()


router.get('/all-providers/', (req, res) => {
    provider.allGetAll(req, res)
})

router.get('/by-id/:id', (req, res) => {
    provider.getById(req, res)
})

router.post('/', (req, res) => {
    provider.save(req, res)
})

router.put('/', (req, res) => {
    provider.update(req, res)
})

router.delete('/:id', (req, res) => {
    provider.delete(req, res)
})



export default router