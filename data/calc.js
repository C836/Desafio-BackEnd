const create = require("./resultado.js")

module.exports = {
    
    calc: function(arr) {
        
        let i=0
        let distancias=[]
        while(i<((arr.length-2)/2)){
            const lat1=arr[0]
            const lon1=arr[1]
    
            var lat2=arr[(i*2)+2]
            var lon2=arr[(i*2)+3]

            const raio = 6371e3;
    
            var rad1 = lat1 * Math.PI/180;
            var rad2 = lat2 * Math.PI/180;
    
            var difLat = (lat2-lat1) * Math.PI/180;
            var difLon = (lon2-lon1) * Math.PI/180;
    
            var x = Math.sin(difLat/2) * Math.sin(difLat/2) +
            Math.cos(rad1) * Math.cos(rad2) *
            Math.sin(difLon/2) * Math.sin(difLon/2);
    
            var y = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1-x));
    
            var result = raio * y
    
            distancias.push(result);
    
            i++;
        }
        console.log(distancias)
        create.json(distancias)
    }
};