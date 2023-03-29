const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const db = require('../models/alumno')
    
router.post('/insertar', async(req,res)=>{
    if (req.body.matricula && req.body.nombre && req.body.domicilio && req.body.sexo && req.body.especialidad) {
        const alumno = {
          matricula: req.body.matricula,
          nombre: req.body.nombre,
          domicilio: req.body.domicilio,
          sexo: req.body.sexo,
          especialidad: req.body.especialidad
        };
        resultado = await db.insertar(alumno);
        res.json(resultado);
      } else {
        res.status(400).json({ error: 'Faltan campos obligatorios' });
      }
})

router.get('/', (req,res)=>{
    db.mostrarTodos()
    .then((data) => res.json(data))
    .catch((err) => res.status(404).send(err.message));
})

router.get('/practica02',(req, res)=>{
    res.render('practica02.html')
})

router.get('/buscar', (req,res)=>{
    
    const matricula = req.query.matricula;
        db.buscarMatricula(matricula)
        .then((data)=> res.json(data))
        .catch((err) => res.status(404).send(err.message));
      
})

router.delete('/borrar', (req,res)=>{
    const matricula = req.query.matricula;
    db.borrarMatricula(matricula)
    .then((data) => res.json(data))
    .catch((err) => res.status(404).send(err.message));
})

router.put('/actualizar', (req,res) =>{
    const alumno = req.body;
    
    db.actualizar(alumno.nombre, alumno.domicilio, alumno.sexo, alumno.especialidad, alumno.matricula)
    .then((data)=> res.json(data))
    .catch((err) =>{
        res.status(404).send(err.message);
    });
});

    module.exports=router;