const loc = require('./api.js')
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

function input() {
    let answers=[]

    console.log(
    "\n=======================================",
    "\nDesenvolvido por Gabriel Lopes // https://github.com/C836", 
    "\nDigite 'rs' a qualquer momento para reiniciar o prompt",
    "\n=======================================\n")

    rl.question('Digite o endereço principal : \n> ', function (ans) {
        answers.push(ans)

    rl.question('Digite um endereço para comparar a distância : \n> ', function (ans) {
        answers.push(ans)

        awse()

        function awse() {
        rl.question('Digite endereços adicionais para comparar ou "start" para iniciar : \n> ', function (ans) {
            
            if(ans!=='start'){
            answers.push(ans);
            awse()
        }
            else{
                rl.close()
                loc.get(answers)
}})}})})}

input()