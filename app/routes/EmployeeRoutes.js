const express = require('express')
const router = express.Router()
const EmployeeController = require('../controllers/EmployeeControllers.js')

router.route('/')
    .get(EmployeeController.getEmployees)
    .post(EmployeeController.createEmployee)
router
    .route('/:id')
    .get(EmployeeController.getEmployeeById)
    .delete(EmployeeController.deleteEmployee)
    .put(EmployeeController.updateEmployee)

module.exports = router