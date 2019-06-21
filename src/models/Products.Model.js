import QueryExecutor from "../services/QueryExecutor";

export default class ProductsModel {

    constructor () {
        this._queryExecutor = new QueryExecutor()
    }

    createProduct (product) {
        let stmt = "INSERT INTO produtos (nome_prod, bar_prod, cod_fab, nome_fab, preco_prod, qnt_prod, fornecedores_cod_forn) VALUES ('"+ product.nome_prod +"', "+ product.bar_prod +", "+ product.cod_fab + ", '" + product.nome_fab + "', '"+ product.preco_prod +"', "+ product.qnt_prod +", "+ product.fornecedores_cod_forn +");"
        return this._queryExecutor.execute(stmt)
    }

    readAllProducts() {
        let stmt = "SELECT * FROM produtos"
        return this._queryExecutor.execute(stmt)
    }

    updateProduct(product) {
        let stmt = "UPDATE produtos SET '"+ product.nome_prod +"', "+ product.bar_prod +", "+ product.cod_fab + ", '" + product.nome_fab + "', '"+ product.preco_prod +"', "+ product.qnt_prod +", "+ product.fornecedores_cod_forn +" WHERE cod_prod="+ product.cod_prod +";"
        return this._queryExecutor.execute(stmt)
    }

}