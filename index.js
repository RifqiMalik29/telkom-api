const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
const routeNav = require('./src');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});
app.use('/api/telkom/v1', routeNav);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});