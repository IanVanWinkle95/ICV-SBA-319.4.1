const express = require('express');
const router = express.Router();
const toDo = require('../models/toDo');

router.get('/', (req, res) => {
    toDo.find({}, (err, foundtoDo)=>{
        res.json(foundtoDo)
    })
})

router.post('/', (req, res) => {
    toDo.create(req.body, (err, createdtoDo)=>{
        res.json(createdtoDo)
    })
})

router.get('/:id', (req, res) => {
    toDo.findById(req.params.id, (err, foundtoDo)=>{
        res.json(foundtoDo)
    })
})

router.put('/:id', (req, res) => {
    toDo.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedtoDo)=>{
        res.json(updatedtoDo)
    })
})

router.delete('/:id', (req, res) => {
    toDo.findByIdAndRemove(req.params.id, (err, deletedtoDo)=>{
        res.json(deletedtoDo)
    })
})

module.exports = router;