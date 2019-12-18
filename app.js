const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

//https://dev.to/lenmorld/rest-api-with-mongodb-atlas-cloud-node-and-express-in-10-minutes-2ii1

//mongoDB connection string
const uri = "mongodb+srv://ing.adrian94fdz@gmail.com:<password>@testcluster-6itcv.mongodb.net/test?retryWrites=true&w=majority";

const routes = require('./routes/api_route');
app.use('/', routes);

const client = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true});
client.connect(err => {
    //const collection = client.db("test").collection("devices");
    if(err){
        console.log('Error ocurred while connecting to MongoDB Atlas', err);
    }

    app.listen(3000);
    console.log('Base de Datos conectada!');
    client.close();
});
