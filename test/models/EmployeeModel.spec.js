import chai from 'chai'
import EmployeesModel from '../../src/models/Employees.Model'


describe('Employee Model basic API =>', () => {

    const employeesModel = new EmployeesModel()

    it ('Shoud create new employee', (done) => {

        let employee = employeesModel.createEmpoyee({
            nome_func: 'Jose reis',
            end_func: 'Rua do teste',
            tel_func: 93749723,
            email_func: 'jose@hotmail.com',
            senha_func: 'senha'
        })

        employee.then(data => {
            if (data.affectedRows != 0) {
                done()
            }
        }).catch(e => {
            console.log(e)
        })

    })

    it ('Shoud retrive all employees from database', (done) => {
        
        let employees = employeesModel.readAllEmployees()

        employees.then(data => {
            if (data) {
                done()
            }
        }).catch(err => {
            console.log(err)
        })

    })

    it ('Shoud retrive a single employee by id', (done) => {

        let employees = employeesModel.readAllEmployees()

        employees.then(data => {
            if (data) {
                let singleEmployee = employeesModel.readById(data[0])
                singleEmployee.then(empl => {
                    if (empl) {
                        done()
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }).catch(err => {
            console.log(err)
        })

    })

    it('Shoud update a employee', (done) => {
        let employees = employeesModel.readAllEmployees()

        employees.then(data => {
            if (data) {
                let updateObj = data[0]
                updateObj.nome_func = "TESTE"

                let updatedEmpl = employeesModel.updateEmployee(updateObj)
                updatedEmpl.then(empl => {
                    if(empl.affectedRows != 0) {
                        done()
                    }
                })
                
            }
        }).catch(err => {
            console.log(err)
        })
    })

    it('Shoud delete a employee', (done) => {
        let employees = employeesModel.readAllEmployees()

        employees.then(data => {
            if (data) {
                let updatedEmpl = employeesModel.deleteEmployee(data[0])
                updatedEmpl.then(data => {
                    if(data.affectedRows != 0) {
                        done()
                    }
                })
            }
        }).catch(err => {
            console.log(err)
        })
    })

})