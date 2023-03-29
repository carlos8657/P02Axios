const json = require('express/lib/response');
const resolve = require('path/posix');
const promise =  require('../models/conexion');
const conexion = require('./conexion.js');

var AlumnoDb= {};

AlumnoDb.insertar = function insertar(alumno){

    return new Promise((resolve, reject)=>{
        var sqlConsulta = 'insert into alumno set ? ';
        conexion.query(sqlConsulta,alumno, function(err, res){

                if(err){
                    reject(err.message)
                }else{
                    resolve({
                    id:alumno.insertid, 
                    matricula: alumno.matricula,
                    nombre : alumno.nombre,
                    domicilio: alumno.domicilio,
                    sexo: alumno.sexo,
                    especialidad: alumno.especialidad
                })
                }

        })
    })
}

AlumnoDb.mostrarTodos = function mostrarTodos(){
    let alumno ={}
    return new Promise ((resolve, reject)=>{
        

        var sqlConsulta = 'select * from alumno';
        conexion.query(sqlConsulta, null, function(err, res){
            
            if(err){
                reject(err.message);
            }else{
                
                alumno=res;
                resolve(alumno);
            }

        })
    })
}

// buscar por matricula

AlumnoDb.buscarMatricula = function buscarMatricula(matricula){
    let alumno = {};
    return new Promise((resolve, reject)=>{
        
        var sqlConsulta = 'select * from alumno where matricula= ?';
        conexion.query(sqlConsulta, matricula, function(err, res){
            
            if(err){
                reject(err.message);
            }else{
                alumno = res;
                resolve(res);
            }

        })
    })
}

//borrar por matricula

AlumnoDb.borrarMatricula = function borrarMatricula(matricula){
    return new Promise((resolve, reject)=>{
        
        var sqlConsulta = 'delete from alumno where matricula= ?;';
        conexion.query(sqlConsulta, matricula, function(err, res){
            
            if(err){
                reject(err.message);
            }else{
                resolve(res.affectedRows);
            }

        })
    })
}

//actualizar alumno

AlumnoDb.actualizar = function actualizar(nombre, domicilio, sexo, especialidad, matricula){
    return new Promise((resolve, reject)=>{
        var sqlConsulta = 'update alumno set nombre = ?, domicilio = ?, sexo = ?, especialidad = ? where matricula = ? ';
        conexion.query(sqlConsulta,[nombre, domicilio, sexo, especialidad, matricula], function(err, res){

                if(err){
                    reject(err.message);
                }else{
                    resolve(res);
                }

        })
    })
}

module.exports = AlumnoDb;