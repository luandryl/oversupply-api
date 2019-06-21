'use strict'
import mysql from 'mysql'

export default class Database {

  constructor () {
    return  mysql.createConnection({
      host     : 'us-cdbr-iron-east-02.cleardb.net',
      port     : 3306,
      user     : 'baaed1f181d63e',
      password : '481757e2',
      database : 'heroku_9f55c5f917f3403'
    })

  }

}