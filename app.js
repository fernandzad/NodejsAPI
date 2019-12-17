const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

//https://medium.com/@uix/building-a-rest-api-using-node-and-mongodb-bf7ac086e8f7

//mongoDB connection string
const uri = "mongodb+srv://ing.adrian94fdz@gmail.com:<password>@testcluster-6itcv.mongodb.net/test?retryWrites=true&w=majority";

const routes = require('./routes/api_route');
app.use('/', routes);

const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true});
client.connect(err => {
    //const collection = client.db("test").collection("devices");
    app.listen(3000);
    console.log('Base de Datos conectada!');
    client.close();
});
