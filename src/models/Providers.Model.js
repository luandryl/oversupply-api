import QueryExecutor from '../services/QueryExecutor';

export default class ProvidersModel {
    constructor () {
        this._queryExecutor = new QueryExecutor()
    }

    createProvider(provider) {
        let stmt = "INSERT INTO fornecedores (nome_forn, tel_forn) VALUES ('"+ provider.nome_forn +"', "+ provider.tel_forn +");"
        return this._queryExecutor.execute(stmt)
    }

    readAllProviders() {
        let stmt = "SELECT * FROM fornecedores"
        return this._queryExecutor.execute(stmt)
    }

    readById(provider) {
        let stmt = "SELECT * FROM fornecedores WHERE cod_forn="+provider.cod_forn+";"
        return this._queryExecutor.execute(stmt)
    }

    updateProvider(provider) {
        let stmt = "UPDATE fornecedores SET nome_fom='"+provider.nome_forn+"', tel_forn="+provider.tel_forn+" WHERE cod_forn="+provider.cod_forn+";"
        return this._queryExecutor.execute(stmt)
    }

    deleteProvider(provider) {
        let stmt = "DELETE FROM fornecedores WHERE cod_forn="+provider.cod_forn+";"
        return this._queryExecutor.execute(stmt)
    }

}