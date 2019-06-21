/*
  Common
*/
import express from 'express'
import path from 'path'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import ClientModel from './src/models/Clients.Model'
import ProvidersModel from './src/models/Providers.Model';
import EmployeesModel from './src/models/Employees.Model'
import OfficeHour from './src/models/OfficeHour.Model';
import SalesModel from './src/models/Sales.Model'
import ProductsModel from './src/models/Products.Model'


/*
Import Endpoints
  Ex : import student from './src/routes/Student.Router'
*/
let app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

/*
  [Database conection] -> refactor
*/

/*
  routes to student resource
  ex: app.use('/student', student)
*/
// app.use('/', user)
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500);
  res.render('error')
})

app.listen(3000, () => {
	console.log('Listening on 3000')
})

export default app