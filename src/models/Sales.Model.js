import QueryExecutor from "../services/QueryExecutor";

export default class SalesModel {
    constructor() {
        this._queryExecutor = new QueryExecutor
    }

    createSale (sale) {
        let stmt = "INSERT INTO vendas (produtos_cod_prod, clientes_cod_cli, funcionarios_cod_func, data_vend, forma_pgto) VALUES ("+ sale.produtos_cod_prod +", "+ sale.clientes_cod_cli +", "+ sale.funcionarios_cod_func +", '"+ sale.data_vend + "', '"+ sale.forma_pgto + "');"
        console.log(stmt)
        return this._queryExecutor.execute(stmt)
    }

    readInfo () {
        let stmt = "select * from produtos, clientes, funcionarios, vendas WHERE vendas.produtos_cod_prod = produtos.cod_prod AND clientes.cod_cli = vendas.clientes_cod_cli AND funcionarios.cod_func = vendas.funcionarios_cod_func;"
        return this._queryExecutor.execute(stmt)
    }

    readAllSales () {
        let stmt = "SELECT * FROM vendas"
        return this._queryExecutor.execute(stmt)
    }

    readById (sale) {
        let stmt = "SELECT * FROM vendas WHERE cod_vend="+ sale.cod_vend +";"
        return this._queryExecutor.execute(stmt)
    }

    deleteSale (sale) {
        let stmt = "DELETE FROM vendas WHERE cod_vend="+ sale.cod_vend +";"
        return this._queryExecutor.execute(stmt)
    }

}