const fs = require('fs');

module.exports = {
    json: function(obj) {
        console.log(obj)
        fs.writeFileSync('./resultado.json', JSON.stringify(obj));

        console.log("\nResultado omitido com sucesso em 'resultado.json'")
    }
}