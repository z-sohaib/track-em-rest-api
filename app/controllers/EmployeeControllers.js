const asyncHandler = require('express-async-handler')
const Employee = require('../models/Employee')

// @desc Fetch all employees
// @route GET /api/employees
// @access Public
exports.getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find()
    res.json({employees, message: "Employees Fetched Successfully"})
})

// @desc Fetch single employee
// @route /api/employees/:id
// access Public
exports.getEmployeeById = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id)

    if(employee) {
        res.json({employee, message: "Employee Fetched Successfully"})
    } else {
        res.status(404)
        throw new Error('Employee not found')
    }
})

// @desc Delete an employee
// @route DELETE /api/employees/:id
// @access Public
exports.deleteEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id)

    if (employee) {
        await employee.remove()
        res.json({message: "Employee removed"})
    } else {
        res.status(404)
        throw new Error('Employee not found')
    }
})

// @desc Create an employee
// @route POST /api/employees
// @access Public
exports.createEmployee = asyncHandler(async (req, res) => {

    const employee = new Employee({
        name: req.body.name,
        productivity: req.body.productivity,
        state: req.body.state,
        day: req.body.day,
        week: req.body.week,
        month: req.body.month,
        year: req.body.year,
    })

    const createdEmployee = await employee.save()
    res.status(201).json({createdEmployee, message: "Employee created"})
})

// @desc Update an employee
// @route PUT /api/employees/:id
// @access Public
exports.updateEmployee = asyncHandler(async (req,res) => {
    const {
        name,
        state,
    } = req.body

    const employee = await Employee.findById(req.params.id)

    if (employee) {
        employee.name = name
        employee.state = state

        const updatedEmployee = await employee.save()
        res.json({updatedEmployee, message: "Employee updated"})
    }
})