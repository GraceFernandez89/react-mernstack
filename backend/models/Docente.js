const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let docenteSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    rollno: {
        num: {
            type: Number
        }
    }
}, {
    collection: 'docente'
})

module.exports = mongoose.model('Docente', docenteSchema)
