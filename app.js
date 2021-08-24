const express = require('express')
const app = express();

const PORT = 1337;
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Puppies and Kittens on ${PORT}</title>
            </head>
            <body>
                <p>Hey you're currently on ${PORT} and it's time to look at puppies or kittens.
                </p>
            </body>
        </html>

    `)
})