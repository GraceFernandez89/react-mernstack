let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

// Student Model
let docenteSchema = require('../models/Docente');

// CREATE Student
router.route('/create-docente').post((req, res, next) => {
    docenteSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});


module.exports = router;
