const express = require('express')
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const morgan = require('morgan');
app.use(morgan('dev'));

const PORT = 1337;
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
})

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Puppies and Kittens on ${PORT}</title>
            </head>
            <body>
                <p>Hey you're currently on PORT ${PORT} and it's time to look at puppies or kittens.
                </p>
            </body>
        </html>

    `)
})

app.get('/puppies', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Puppies</title>
            </head>
            <body>
                <p>Puppy Time!
                </p>
            </body>
        </html>

    `)
})

app.get('/kittens', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Kittens</title>
            </head>
            <body>
                <p>Kitten Time!
                </p>
            </body>
        </html>

    `)
})

app.post('/users', (req, res) => {
    console.log('Post request made to /users');
    console.log('request object:', req)
    console.log('body:', req.body)
    res.send({message: 'nothing here yet', youSentUs: req.body})
})

// fetch('/users', {
//     method: 'POST',
//         headers: {
//             'Content-type': 'Application/json',
//         },
//         body: JSON.stringify([
//             {name: 'Ervin Howell'},
//             {name: 'Leanne Graham'},
//             {name: 'Clementine Bauch'}
//         ])
// }). then(res =>
//     res.json()).then(console.log).catch(console.log);