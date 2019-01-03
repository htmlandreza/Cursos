//Axios
axios.get('https://api.github.com/users/htmlandreza')
    .then(function(response){
        console.log(response);
     })
    .catch(function(error){
        console.warn(error);
    });