const loc = require('./api.js')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function input() {
    let arr=[]

    rl.question('Digite o endereço principal : ', function (ans) {
        arr.push(ans)

    rl.question('Digite um endereço para comparar a distância : ', function (ans) {
        arr.push(ans)

        recursiveAsyncReadLine()

        function recursiveAsyncReadLine() {
        rl.question('Digite endereços adicionais para comparar ou "start" para iniciar : ', function (ans) {
            
            if(ans!=='start'){
            arr.push(ans);
            recursiveAsyncReadLine()
        }
            else{
                rl.close()
                loc.get(arr)
}})}})})}

input()