import chai from 'chai'
import QueryExecutor from '../../src/services/QueryExecutor'

chai.should()

let expect = chai.expect()


describe('Query executor tests =>', () => {

    const query = new QueryExecutor()

    it ('Shoud execute one single query', (done) => {
        let stmt =  'SELECT * FROM clientes'
        let selected = query.execute(stmt)

        selected.then((data) => {
            if (data) {
                done()
            }
        }).catch(e => {
            console.log(e)
        })
        
    })
    it ('Shoud execute many querys', (done) => {

        let stmt = ['SELECT * FROM clientes', 'SELECT * FROM funcionarios', 'SELECT * FROM clientes WHERE cod_cli = 12']
        let ct = 0
        let promisses = []

        stmt.map(e => {
            promisses.push(query.execute(e))
        })

        Promise.all(promisses).then(data => {
            if (data) {
                done()
            }
        }).catch(err => {
            console.log(err)
        })

    })

})