var voceComprou = new Promise(function(resolve, reject){
    setTimeout(function() {
        let products = ['camisa', 'tenis']
        resolve(products)
    })
})

voceComprou
    .then(function(products){
        console.log(products)
    })
    .catch(function(){
        console.log("Deu ruim")
    })





