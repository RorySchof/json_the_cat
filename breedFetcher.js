const request = require('request')
const breedName = process.argv[2]
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search'

request('https://api.thecatapi.com/v1/breeds/search', function (error, response, body){
  if (!error && response.statuscode == 200){
    console.log(body);
    console.log(typeof body);

    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data)

    const firstEntry = data[0]
    console.log("Your description is: ${firstEntry.description}")
  }
  else if (response.statusCode == 404 ){
    console.log('Looks like "${breedName}" was not found')
  }

  else {
    console.log("looks like you have an error called ${error}")

  }

});


