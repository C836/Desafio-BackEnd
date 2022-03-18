const fs = require('fs');

module.exports = {

    json: function(arr,address) {
        let distancias = {}
        let arrayObj = []

        for(x in arr){
            distancias = {
                main_address : "endereco",
                address : "o outro",
                distance : arr[x]
            }

            arrayObj.push(distancias)
        }

        let data = JSON.stringify(arrayObj);
        fs.writeFileSync('resultado.json', data);
    }
}