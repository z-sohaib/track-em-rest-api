const express = require('express')
const router = express.Router()
const {
    getEmployees,
    getEmployeeById,
    deleteEmployee,
    createEmployee,
    updateEmployee
} = require('../controllers/EmployeeController.js')

router.route('/')
    .get(getEmployees)
    .post(createEmployee)
router
    .route('/:id')
    .get(getEmployeeById)
    .delete(deleteEmployee)
    .put(updateEmployee)

export default router