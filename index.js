const express = require('express');
const server = express();
//Substitua isso pela função que irá retornar o json da api a partir do SEU endereço
//var loc = require("./data/api");
const loc = require('./data/calc.js')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var arr=[]

rl.question('Digite a latitude do endereço principal separado por ponto(".") : ', function (ans) {
    arr.push(ans)
    rl.question('Digite a longitude do endereço principal : ', function (ans) {
        arr.push(ans)
        
        rl.question('Digite a latitude do endereço para calcular ou : ', function (ans) {
        arr.push(ans)
            rl.question('Digite a longitute do endereço para calcular : ', function (ans) {
                arr.push(ans)

                recursiveAsyncReadLine()

                function recursiveAsyncReadLine() {
                    rl.question('Digite a latitude do endereço para calcular ou "start" para iniciar : ', function (ans) {
                        arr.push(ans);

                        if(ans!=='start'){

                        rl.question('Digite a longitude do endereço para calcular ou "start" para iniciar :', function (ans) {
                            arr.push(ans);

                            recursiveAsyncReadLine()
                            })
                        }

                        else{
                            console.log(loc.calc(arr))
                            rl.close()
                        }
                    })
                }
            })
        })
    });
});

-22.7319497,-43.3689928

-22.9519414,-43.2104226

rl.on('close', function () {
console.log('\nBYE BYE !!!');
process.exit(0);
});

/*server.get("/teste", (req,res) =>{
    //var resultado = loc.loc(req.params.tagId);
    var main_lat=loc.results[0].geometry.location.lat;
    var main_lng=loc.results[0].geometry.location.lng;

    res.send({main_lat,main_lng})
})

server.listen(3000, () =>{
    console.log("funcionando")
})*/