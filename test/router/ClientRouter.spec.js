import axios from 'axios'
import chai from 'chai'

const URL = 'http://localhost:3000/clients/'

describe('Test Client Routes', () => {

    it ('Shoud save a new Client', (done) => {
        let client = {
            nome_cli: "Luan A S",
            cpf_cli: 3280470,
            tel_cli: 12312,
            end_cli: 'RUA TESTE Nº 123'
        }

        axios.post(URL, client).then(data => {
            if (data.status == 200) {
                console.log(data)
                done()
            }
        }).catch(e => {
            console.log(e)
        })
    })

    it ('Shoud retrive all clients from database', (done) => {
        axios.get(URL + 'all-clients').then(data => {
            if (data) {
                done()
            }
        }).catch(e => {
            console.log(e)
        })
    })

    it ('Shoud retrive clients by id from database', (done) => {
        axios.get(URL + 'all-clients').then(data => {
            if (data) {
                axios.get(URL + '/by-id/' + data.data[0].cod_cli).then(client => {
                    if (client)
                        done()
                }).catch(e => {
                    console.log(e)
                })
            }
        }).catch(e => {
            console.log(e)
        })
    })

    it('Should delete a client from database', (done) => {
        
    })

})