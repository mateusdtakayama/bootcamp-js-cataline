let btn = document.getElementById("load-users")

btn.addEventListener("click", function(){
   axios.get('https://api.github.com/users')
    .then(function(response){
        console.log(response.data)
    })
    .catch(function(error){
        console.log(error)
    })

})