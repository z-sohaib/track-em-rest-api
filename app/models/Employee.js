const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    name: {type: String, required: true},
    productivity: {type: [Number], required: true},
    state: {type: String, required: true},
    day: {type: [Number]},
    week: {type: [Number]},
    month: {type: [Number]},
    year: {type: [Number]},

},
{
    timestamps: true,
})

const Employee = mongoose.model('User', EmployeeSchema)

module.exports = Employee