import ProvidersModel from '../models/Providers.Model'

export default class ProvidersController {
    constructor () {
        this._providersModel = new ProvidersModel()
    }

    getById (req, res) {
        let provider = {
            cod_forn: req.params.id 
        }

        this._providersModel.readById(provider).then(data => {
            if (data) {
                res.send(data)
                res.status(200)
                res.end()
              } else {
                res.send({
                  msg: 'No provider found in database'
                })
                res.status(400)
                res.end()
              }
        }).catch(e => {
            console.log(e)
        })
    }

    allGetAll(req, res) {
        this._providersModel.readAllProviders().then(data => {
            if (data) {
                    res.send(data)
                    res.status(200)
                    res.end()
                } else {
                    res.send({
                        msg: 'No Providers in database'
                    })
                    res.status(200)
                    res.end()
                }
        }).catch(e => {
            console.log(e)
        })
    }

    save(req, res) {
        this._providersModel.createProvider(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end()
            } else {
                res.send({
                    msg: 'Provider not saved in database'
                })
                res.end()
            }
        })
    }

    update(req, res) {
        this._providersModel.updateProvider(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end()
            } else {
                res.send({
                    msg: 'Client not saved in database'
                })
                res.end()
            }
        })
    }

    delete(req, res) {
        this._providersModel.deleteProvider(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end()
            } else {
                res.send({
                    msg: 'Provider not saved in database'
                })
                res.end()
            }
        })
    }
}