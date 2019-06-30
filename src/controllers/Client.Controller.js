import ClientModel from '../models/Clients.Model'

export default class ClientController {

  constructor () {
    this._clientModel = new ClientModel()
  }

  getById(req, res) {
    let client = {
      cod_cli: req.params.id
    }

    this._clientModel.readById(client).then(data => {
      if (data) {
        res.send(data)
        res.status(200)
        res.end()
      } else {
        res.send({
          msg: 'No client found in database'
        })
        res.status(400)
        res.end()
      }
    }).catch(e => {
      console.log(e)
    })
  }

  allClients(req, res) {

    this._clientModel.readAllClients().then(data => {
      if (data) {
        res.send(data)
        res.status(200)
        res.end()
      } else {
        res.send({
          msg: 'No clients in database'
        })
        res.status(200)
        res.end()
      }
    }).catch(e => {
      console.log(e)
    })
  }


  saveClient(req, res) {
    this._clientModel.createClient(req.body).then(data => {
      if (data.affectedRows != 0) {
        res.send(data)
        res.status(200)
        res.end
      } else {
        res.send({
          msg: 'Client not saved in database'
        })
      }
    }).catch(e => {
      console.log(e)
    })
  }

  updateClient (req, res) {
    this._clientModel.updateClient(req.body).then(data => {
      if (data.affectedRows != 0) {
        res.send(data)
        res.status(200)
        res.end
      } else {
        res.send({
          msg: 'Client not updated in database'
        })
      }
    }).catch(e => {
      console.log(e)
    })
  }

  deleteClient (req, res) {
    let client = {
      cod_cli: req.params.id
    }

    this._clientModel.deleteClient(client).then(data => {
      if (data.affectedRows != 0) {
        res.send(data)
        res.status(200)
        res.end
      } else {
        res.send({
          msg: 'Client not deleted in database'
        })
      }
    }).catch(e => {
      console.log(e)
    })
  }
}