const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8000;
const userRoutes = require('./src');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Route
app.use('/api/telkom/v1', userRoutes);

app.listen(PORT, () => console.log(`Server running on PORT : ${PORT}`));