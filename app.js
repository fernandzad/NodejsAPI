const express = require('express');
const app = express();
const body_parser = require('body-parser');
const routes = require('./routes/api_route');
//https://dev.to/lenmorld/rest-api-with-mongodb-atlas-cloud-node-and-express-in-10-minutes-2ii1
//https://medium.com/williambastidasblog/estructura-de-una-api-rest-con-nodejs-express-y-mongodb-cdd97637b18b

app.use(body_parser.json());
app.use('/', routes);

const port = 3000;
const db = require('./models/db');
const dbName = 'data';
const dbCollectionName = 'movies';

db.initialize(dbName, dbCollectionName);

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});