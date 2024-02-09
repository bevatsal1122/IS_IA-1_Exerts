const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors())

// Endpoint for handling authentication
app.post('/authenticate', (req, res) => {
    const { username, password } = req.body;

    // Replace this check with your actual authentication logic
    if (username === 'henry' && password === 'iamahacker') {
        res.json({ success: true, message: 'Authentication successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
