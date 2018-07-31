const express = require('express')
const app = express()

let users = [
    {
        id: 1,
        name: "Lee"
    },
    {
        id: 2,
        name: "Kim"
    },
    {
        id: 3,
        name: "Park"
    },
]

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Testing')
})

app.get('/users', (req, res) => res.json(users))

app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if(!id){
        return res.status(400).json({error: 'Oncorrect id'})
    };
    return res.json(users);
})


app.listen(3402, () => {
    console.log('Example server listening on port 3402')
})