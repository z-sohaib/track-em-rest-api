const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    productivity_score: {type: Number, required: true},

},
{
    timestamps: true,
})

const Employee = mongoose.model('User', EmployeeSchema)

module.exports = Employee