const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const quotesRouter = require('./routes/quotes');



app.listen(port, () => {
    console.log(` Port listening at http://localhost:${port}`);
});