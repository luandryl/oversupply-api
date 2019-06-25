import OfcHour from '../models/OfficeHour.Model'

export default class OfficeHourController {
    constructor() {
        this._ofcHour = new OfcHour()
    }

    save(req, res) {
        this._ofcHour.createOfficeHour(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'No office Hour'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }

    readAll(req, res) {
        this._ofcHour.readAllOfficeHours().then(data => {
            if (data) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'No office Hour'
                })
              }  
        }).catch(e => {
            console.log(e)
        })
    }

    readById(req, res) {
        let ofc = {
            cod_exp: req.params.id 
        }
        this._ofcHour.readById(ofc).then(data => {
            if (data) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'No office Hour'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }

    readByEmpl(req, res) {
        let ofc = {
            funcionarios_cod_func: req.params.id 
        }
        this._ofcHour.readByEmployee(ofc).then(data => {
            if (data) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'No office Hour'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }


    update(req, res){
        this._ofcHour.updateteOfficeHour(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'No office Hour'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }

    delete (req, res) {
        this._ofcHour.deleteOfficeHour(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'No office Hour'
                })
              }
        })
    }
}