import QueryExecutor from "../services/QueryExecutor"

export default class OfficeHour {

    constructor () {
        this._queryExecutor = new QueryExecutor()
    }

    createOfficeHour (office) {
        /*
            todo -> date time
        */
        let stmt = "INSERT INTO expediente (funcionarios_cod_func, hor_ent_func, hor_sai_func) VALUES ("+ office.funcionarios_cod_func +", "+ office.hor_ent_func +", "+ office.hor_sai_func +");"
        return this._queryExecutor.execute(stmt)
    } 

    readAllOfficeHours () {
        let stmt =  "SELECT * FROM expediente"
        return this._queryExecutor.execute(stmt)
    }
    
    updateteOfficeHour (office) {
        let stmt =  "UPDATE expediente SET hor_ent_func="+ office.hor_ent_func +", hor_sai_func="+ office.hor_sai_func+" WHERE cod_exp="+ office.cod_exp +";" 
        return this._queryExecutor.execute(stmt)
    } 

    deleteOfficeHour (office) {
        let stmt = "DELETE from expediente WHERE cod_exp="+ office.cod_exp +";"
        return this._queryExecutor.execute(stmt)
    } 

}