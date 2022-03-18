const loc = require('./calc.js')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = {
    user: function() {
        let arr=[]

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
                
                if(ans!=='start'){
                arr.push(ans);

            rl.question('Digite a longitude do endereço para calcular ou "start" para iniciar :', function (ans) {
                arr.push(ans);
                recursiveAsyncReadLine()
                
                })
            }
                else{
                    rl.close()
                    loc.calc(arr)
}})}})})})})}}