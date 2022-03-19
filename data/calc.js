const create = require("./resultado.js")
let lat1=0
let lon1=0
let obj = []
let i=0

module.exports = { 
    calc: function(arr) {
        for(x in arr){
            for(y in arr){
                if(arr[x].de===arr[y].para){
                    lat1 = arr[y].lat
                    lon1 = arr[y].long
                }
            }
        }

        while(i<(arr.length)){
            if(arr[i].de===arr[i].para){
                i++;
                continue
            } else {
                var principal=arr[i].de
                var nome=arr[i].para

                var lat2=arr[i].lat
                var lon2=arr[i].long

                const raio = 6371e3;
        
                const rad1 = lat1 * Math.PI/180;
                var rad2 = lat2 * Math.PI/180;
        
                var difLat = (lat2-lat1) * Math.PI/180;
                var difLon = (lon2-lon1) * Math.PI/180;
        
                var x = Math.sin(difLat/2) * Math.sin(difLat/2) +
                Math.cos(rad1) * Math.cos(rad2) *
                Math.sin(difLon/2) * Math.sin(difLon/2);
        
                var y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
        
                var result = (raio * y).toFixed()
                result = (Number(result)).toLocaleString()
                result = result.replace(/.([^.]*)$/, ',' + '$1')+" km"

                var distances = {
                    origem : principal,
                    destino : nome,
                    distancia : result
                }
            
                obj.push(distances)
                console.log(obj)

                i++;
            }
        }
    }
};