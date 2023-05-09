require('dotenv').config();

const api = require('./api');

api.listen(process.env.PORT, () => {
    console.log(`Florin County Council Library listening on ${process.env.PORT}...`);
})
