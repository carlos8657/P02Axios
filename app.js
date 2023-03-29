const http = require ("http");
const express = require("express");
const bodyparser= require("body-parser");
const misRutas = require ("./router/index");
const path = require ("path");

const app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());;
app.set('view engine', "ejs")
app.use(misRutas);
app.use(express.json());
app.engine("html",require("ejs").renderFile);


app.use((req,res,next)=>{
    res.status(404).sendFile(__dirname + '/public/error.html')
})

const puerto = 3000;

app.listen(puerto,()=>{    

    console.log("iniciando puerto 3000" );

});