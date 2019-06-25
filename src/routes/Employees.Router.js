import  express  from "express";
import EmployeesController from '../controllers/Employees.Controller'

let router = express.Router()
let empControlller = new EmployeesController()

router.get('/all/', (req, res) => {
    empControlller.getAll(req, res)
})

router.get('/by-id/:id', (req, res) => {
    empControlller.getById(req, res)
})

router.post('/', (req, res) => {
    empControlller.save(req, res)
})

router.put('/', (req, res) => {
    empControlller.update(req, res)
})

router.delete('/', (req, res) => {
    empControlller.delete(req, res)
})

export default router