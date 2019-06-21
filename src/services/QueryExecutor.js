/*
  Database Import
*/
import Database from '../database/Database'

export default class QueryExecutor {

    constructor () {
        this._conn = new Database()
        this._conn.connect()
    }
    
    execute(stmt) {
        return new Promise ((resolve, reject) => {
            try {
                this._conn.query(stmt, (e, r) => {
                    if (e) {
                        reject(e, null)
                    } else {
                        resolve(r, null)
                    }
                })
            } finally {
                this._conn.end()
            }
        })
    }
} 