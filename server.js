const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName': "Sheyaa Bin Abraham-Joseph",
        'birthLocation': 'London, England',
        },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Bennett',
        'birthLocation' : 'Chicago, Illinois'
    },
    'unknown':{
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
    
}

//main route is always /
// make it look like an event listener. instead of a click, it's a network request 
// then the response is index.html since we are sending them to the main page.
// it doesn't know where to get index.html so we have to include a path relative to this file.
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

// return a JSON! to use query params use :name
// request.params.name is an express module that will parse the API request to the correct object
// you can't use dot notation since we have spaces in our JSON object of rapper names.
//if rapperName is a property of rappers is how to read the if statement
app.get('/api/:name',(request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})
    
// now the server needs to be set up to listen
app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go catch it!`)
})