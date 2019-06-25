import express from 'express'
import OfcController from '../controllers/OfficeHour.Controller'

let router = express.Router()
let ofc = new OfcController()

router.get('/all-ofc/', (req, res) => {
    ofc.readAll(req, res)
})

router.get('/by-id/:id', (req, res) => {
    ofc.readById(req, res)
})

router.get('/by-empl/:id', (req, res) => {
    ofc.readByEmpl(req, res)
})

router.post('/', (req, res) => {
    ofc.save(req, res)
})

router.put('/', (req, res) => {
    ofc.update(req, res)
})

router.delete('/', (req, res) => {
    ofc.delete(req, res)
})

export default router