import QueryExecutor from "../services/QueryExecutor";

export default class EmployeesModel {

    constructor () {
        this._queryExecutor = new QueryExecutor()
    }

    createEmpoyee (employee) {
        let stmt = "INSERT INTO funcionarios (nome_func, end_func, tel_func, email_func, senha_func) VALUES ('"+ employee.nome_func +"', '"+ employee.end_func +"', "+ employee.tel_func +", '"+ employee.email_func +"', '"+ employee.senha_func +"');"
        return this._queryExecutor.execute(stmt)
    }

    readAllEmployees() {
        let stmt = "SELECT * FROM funcionarios"
        return this._queryExecutor.execute(stmt)
    }

    updateEmployee(employee) {
        let stmt = "UPDATE funcionarios SET nome_func='"+ employee.nome_func +"', tel_func="+ employee.tel_func +", email_func='"+ employee.email_func +"', senha_func='"+ employee.senha_func +"' WHERE cod_func="+ employee.cod_func +"";
        return this._queryExecutor.execute(stmt)
    }

    deleteEmployee (employee) {
        let stmt = "DELETE FROM funcionarios WHERE cod_func="+employee.cod_func+";"
        return this._queryExecutor.execute(stmt)
    }

}