import EmployeesModel from '../models/Employees.Model'

export default class EmployeesController {
    
    constructor () {
        this._emplooyeModel = new EmployeesModel()
    }

    getById(req, res) {
        let employee = {
            cod_func: req.params.id
        }

        this._emplooyeModel.readById(employee).then(data => {
            if (data) {
                res.send(data)
                res.status(200)
            } else {
                res.send({
                    msg: 'Employee not found'
                })
                res.status(200)
            }
            res.end()
        }).catch(e => {
            console.log(e)
        })
    }

    getAll(req, res) {
        this._emplooyeModel.readAllEmployees().then(data => {
            if (data) {
                res.send(data)
                res.status(200)
            } else {
                res.send({
                    msg: 'Employees not found'
                })
                res.status(200)
            }
            res.end()
        }).catch(e => {
            console.log(e)
        })
    }

    save(req, res) {
        this._emplooyeModel.createEmpoyee(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'Employee not saved in database'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }

    update (req, res) {
        this._emplooyeModel.updateEmployee(req.body).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'Employee not updated in database'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }

    delete (req, res) { 
        let employee = {
            cod_func: req.params.id
        }
        this._emplooyeModel.deleteEmployee(employee).then(data => {
            if (data.affectedRows != 0) {
                res.send(data)
                res.status(200)
                res.end
              } else {
                res.send({
                  msg: 'Employee not deleted in database'
                })
              }
        }).catch(e => {
            console.log(e)
        })
    }

}