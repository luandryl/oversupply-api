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
            } catch (e) {
                console.log(e)
            }
        })
    }

    query(sql) {
        return new Promise((resolve, reject) => {
            this._conn.query(sql, (err, rows) => {
                if(err)
                    return reject(err, null)
                resolve(rows)
            })
        })
    }

    close() {
        return new Promise((resolve, reject) => {
            this._conn.end(err => {
                if (err)
                    return reject(err)
                resolve()
            })
        })
    }

} 