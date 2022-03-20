const fetch = require('node-fetch')
const calc = require('./calc')

arrDistancias=[]

module.exports = {
    get: function(enderecos) {
        for(x in enderecos){
            let nome = enderecos[x]

            fetch(`http://api.positionstack.com/v1/forward?access_key=debd91e6cd3bdf06bddc138dfb493b2d&query=${enderecos[x]}`)

            .then(res => res.json())
            .then(json => {            

                var distancias = {
                    de : enderecos[0],
                    para : nome,
                    lat : json.data[0].latitude,
                    long : json.data[0].longitude
                }
            
                arrDistancias.push(distancias)
                calc.calc(arrDistancias)
            })
        }
    }
};