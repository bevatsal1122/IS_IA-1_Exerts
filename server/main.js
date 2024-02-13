const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const path = require('path');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors())

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/', (req, res) => {
    const { username, password } = req.body;

    if (username === 'henry' && password === 'iamahacker') {
        res.json({ success: true, message: 'Correct password' });
    } else {
        res.json({ success: false, message: 'Incorrect password' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
