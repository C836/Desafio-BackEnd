const express = require('express');
const server = express();
//Substitua isso pela função que irá retornar o json da api a partir do SEU endereço
//var loc = require("./data/api");
const input = require('./data/input.js')
const calc = require('./data/calc.js')
const result = require('./data/resultado.js')

input.user()

//result.create()

/*server.get("/teste", (req,res) =>{
    //var resultado = loc.loc(req.params.tagId);
    var main_lat=loc.results[0].geometry.location.lat;
    var main_lng=loc.results[0].geometry.location.lng;

    res.send({main_lat,main_lng})
})

server.listen(3000, () =>{
    console.log("funcionando")
})*/