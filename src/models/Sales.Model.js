import QueryExecutor from "../services/QueryExecutor";

export default class SalesModel {
    constructor() {
        this._queryExecutor = new QueryExecutor
    }

    createSale (sale) {
        let stmt = "INSERT INTO vendas (produtos_cod_prod, clientes_cod_cli, funcionarios_cod_func, data_vend, forma_pgto) VALUES ("+ sale.produtos_cod_prod +", "+ sale.clientes_cod_cli +", "+ sale.fucionarios_cod_func +", "+ sale.data_venda + ", '"+ sale.forma_pgto + "');"
        return this._queryExecutor.execute(stmt)
    }

    readAllSales () {
        let stmt = "SELECT * FROM vendas"
        return this._queryExecutor.execute(stmt)
    }

    deleteSale (sale) {
        let stmt = "DELETE FROM vendas WHERE cod_vend="+ sale.cod_vend +";"
        return this._queryExecutor.execute(stmt)
    }

}