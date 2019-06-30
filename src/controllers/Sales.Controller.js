import SalesModel from '../models/Sales.Model'

export default class SalesController {
    constructor () {
        this._salesModel = new SalesModel()
    }

    getSales (req, res) {
        this._salesModel.readInfo().then(data => {
            if (data) {
                res.send(data)
                res.status(200)
            } else {
                res.send({
                    msg: 'Sales not found'
                })
                res.status(200)
            }
            res.end()
        }).catch(e => {
            console.log(e)
        })
    }

    getAll (req, res) {
        this._salesModel.readAllSales().then(data => {
            if (data) {
                res.send(data)
                res.status(200)
            } else {
                res.send({
                    msg: 'Sales not found'
                })
                res.status(200)
            }
            res.end()
        }).catch(e => {
            console.log(e)
        })
    }

    getById (req, res) {
        let sale = {
            cod_vend: req.params.id
        }

        this._salesModel.readById(sale).then(data => {
            if (data) {
                res.send(data)
                res.status(200)
            } else {
                res.send({
                    msg: 'Sale not found'
                })
                res.status(200)
            }
            res.end()
        }).catch(e => {
            console.log(e)
        })
    }

    save(req, res) {
        this._salesModel.createSale(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'Sale not saved in database'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }

    delete(req, res) {
        let sale = {
            cod_vend: req.params.id
        }
        this._salesModel.deleteSale(sale).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'Sale notdeleted in database'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }

}