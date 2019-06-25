import chai from 'chai'
import ClientsModel from '../../src/models/Clients.Model'

chai.should()

let expect = chai.expect()

describe('ClientModel basic API =>', () => {

    const clientsModel = new ClientsModel()

    it('Should create new client', (done) => {
        
        let createdClient = clientsModel.createClient({
            nome_cli: "Luan A S",
            cpf_cli: 3280470,
            tel_cli: 12312,
            end_cli: 'RUA TESTE Nº 123'
        })

        createdClient.then(data => {
            if(data.affectedRows != 0) {
                done()
            }
        }).catch(err => {
            console.log(err)
        })
    })

    it ('Shoud retrive all clients from database', (done) => {

        let clientsArray = clientsModel.readAllClients()
        clientsArray.then(data => {
            if (data) {
                done()
            }
        }).catch(err => {
            console.log(err)
        })

    })

    it ('Shoud retrive a single client by id', (done) => {

        let clients = clientsModel.readAllClients()

        clients.then(data => {
            if (data) {
                let singleClient = clientsModel.readById(data[0])
                singleClient.then(client => {
                    if (client) {
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

    it ('Shoud update a client by id', (done) => {

        let clients = clientsModel.readAllClients()

        clients.then(data => {
            if (data) {
                let updatedObj = data[0]
                updatedObj.nome_cli = "TESTE"
        
                let updatedClient = clientsModel.updateClient(updatedObj)

                updatedClient.then(client => {
                    if (client.affectedRows != 0)
                        done()
                }).catch(err => {
                    console.log(err)
                })

            }
        }).catch(e => {
            console.log(e)
        })

    })

    it ('shoud delete a client by id', (done) => {

        let clients = clientsModel.readAllClients()

        clients.then(data => {
            if (data) {
                let singleClient = clientsModel.deleteClient(data[0])
                singleClient.then(data => {
                    if (data.affectedRows != 0) {
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


})
