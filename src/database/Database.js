'use strict'
import mysql from 'mysql'
/*
  let conf = {
      host     : 'us-cdbr-iron-east-02.cleardb.net',
      port     : 3306,
      user     : 'baaed1f181d63e',
      password : '481757e2',
      database : 'heroku_9f55c5f917f3403'
  }
*/
export default class Database {

  constructor () {
    this._config = {
      host     : '127.0.0.1',
      port     : 3306,
      user     : 'root',
      password : '',
      database : 'oversupply'
    }
  }
  
  connect() {
    return mysql.createConnection(this._config)
  }

  handleDisconnect (conn) {
    conn.on('error', (err) => {
      console.log('ee')
        if (!err.fatal)
            return
        
        if (!err.code !== 'PROTOCOL_CONNECTION_LOST') {
            throw err
        }
        console.log('Connection lost: Reconnecting')

        let connection = mysql.createConnection(this._config)
        this._handleDisconnect(connection)
        connection.connect()
    })
  }
}