import Executor from '../services/QueryExecutor'
export default class ClientModel {

    constructor () {
        this._queryExecutor = new Executor()
    }

    createClient(client) {
        /*
            @todo -> way to inform if the process works or not;
        */
        let stmt = "INSERT INTO clientes (nome_cli, cpf_cli, tel_cli, end_cli) VALUES ('"+ client.name_cli +"', "+ client.cpf_cli +", "+ client.tel_cli +", '"+ client.end_cli +"');"
        return this._queryExecutor.execute(stmt)
    }

    readAllClients () {
        let stmt = "SELECT * FROM clientes"
        return this._queryExecutor.execute(stmt)
    }

    readById (client) {
        let stmt = "SELECT * FROM clientes WHERE cod_cli="+ client.cod_cli +";"
        return this._queryExecutor.execute(stmt)
    }

    updateClient (client) {
        let stmt = "UPDATE clientes SET nome_cli='"+client.nome_cli+"', cpf_cli="+client.cpf_cli +", tel_cli="+client.tel_cli+", end_cli='"+client.end_cli+"' WHERE cod_cli="+client.cod_cli+";"
        return this._queryExecutor.execute(stmt)
    }

    deleteClient (client) {
        let stmt = "DELETE FROM clientes WHERE cod_cli="+client.cod_cli+";"
        return this._queryExecutor.execute(stmt)
    }

}