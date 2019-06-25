import chai from 'chai'
import OfficeModel from '../../src/models/OfficeHour.Model'
import EmployeeModel from '../../src/models/Employees.Model'

describe('Office Hour basic API => ', () => {

    const ofcModel = new OfficeModel()
    const empl = new EmployeeModel()
    
    it('Shoud create a new Office Hour', (done) => {

        let employee = empl.createEmpoyee({
            nome_func: 'Jose reis',
            end_func: 'Rua do teste',
            tel_func: 93749723,
            email_func: 'jose@hotmail.com',
            senha_func: 'senha'
        })

        employee.then(data => {
            if (data) {
                let newOfc = ofcModel.createOfficeHour({
                    funcionarios_cod_func: data.insertId,
                    hor_ent_func: new Date().toISOString().slice(0, 19).replace('T', ' '),
                    hor_sai_func: new Date().toISOString().slice(0, 19).replace('T', ' ')
                })
    
                newOfc.then(ofc => {
                    if(ofc) {
                        done()
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }).catch(e => {
            console.log(e)
        })
    })

    it ('Shoud retrive all ofc hour from database', (done) => {

        let ofcArray = ofcModel.readAllOfficeHours()

        ofcArray.then((data) => {
            if (data) {
                done()
            }
        }).catch(err =>{
            console.log(err)
        })
    })

    it('Shoud retrive ofc hour by id', (done) => {
        let ofcArray = ofcModel.readAllOfficeHours()

        ofcArray.then((data) => {
            if (data) {
                let singleOfc = ofcModel.readById(data[0])
                singleOfc.then(ofc => {
                    if (ofc) {
                        done()
                    }
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(err =>{
            console.log(err)
        })
    })

    it('Shoud retrive ofc hour by employee id', (done) => {
        let ofcArray = ofcModel.readAllOfficeHours()

        ofcArray.then((data) => {
            if (data) {
                let ofcByEmp = ofcModel.readAllOfficeHours(data[0])
                ofcByEmp.then(ofc => {
                    if(ofc)
                        done()
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(err =>{
            console.log(err)
        })
    })

    it ('Should update a ofc hour', (done) => {
        let ofcArray = ofcModel.readAllOfficeHours()

        ofcArray.then(data => {
            if (data) {
                let updatedObj = data[0]
                updatedObj.hor_ent_func = new Date().toISOString().slice(0, 19).replace('T', ' ')
                let updatedOfc = ofcModel.updateteOfficeHour(updatedObj)
                updatedOfc.then(ofc => {
                    if (ofc) {
                        done()
                    }
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(err => {
            console.log(err)
        })
    })
    
    it ('Shoud delete a ofc hour', (done) => {
        let ofcArray = ofcModel.readAllOfficeHours()
        ofcArray.then(data => {
            if (data) {
                let updatedOfc = ofcModel.deleteOfficeHour(data[0])
                updatedOfc.then(ofc => {
                    if (ofc) {
                        done()
                    }
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(err => {
            console.log(err)
        })
    })
})