import express from 'express'
import ClientController from '../controllers/Client.Controller'

let router = express.Router()
let client = new ClientController()

router.get('/all-clients/', (req, res) => {
    client.allClients(req, res)
})

router.get('/by-id/:id', (req, res) => {
    client.getById(req, res)
})

router.post('/', (req, res) => {
    client.saveClient(req, res)
})

router.put('/', (req, res) => {
    client.updateClient(req, res)
})

router.delete('/', (req, res) => {
    client.deleteClient(req, res)
})


export default router