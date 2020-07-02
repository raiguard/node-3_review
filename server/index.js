const express = require('express');
const app = express();





const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => console.log(`Listening to sweet sounds on ${SERVER_PORT}FM`));