const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const port = 3001


// rotes
app.get('/', (req, res) => {
    res.send("<h1>Hello From Backend Server</h1>")
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})