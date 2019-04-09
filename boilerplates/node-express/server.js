const express = require('express');
const test = require('./routes/api/test');

const app = express();

app.use('/api/test', test);

const port = 5000 || process.env.port;

app.listen(port, () => console.log(`Server running on port ${port}`));