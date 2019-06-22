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

export default router