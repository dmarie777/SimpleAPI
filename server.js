const express = require('express')
const app = express()
const PORT = 8000

const rappers = { 
    '21 savage': {
        'age':29,
        'birthName':'Sheyas Bin Abraham-Joseph',
        'bithLocation':'London, England'
    },
    'dsd' : {
        'age':29,
        'birthName':'dylanh',
        'bithLocation':'London, England'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    } else {
        response.json(rappers['dsd'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}: You better catch it!`);
})