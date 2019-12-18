const MongoClient = require('mongodb').MongoClient;

function initialize( dbName, dbCollectionName ) {
    const dbConnectionUrl = "mongodb+srv://ing.adrian94fdz@gmail.com:'Inception2575.-'@testcluster-6itcv.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(dbConnectionUrl, { useUnifiedTopology: true, useNewUrlParser: true});

    client.connect(err => {
        if(err){
            console.log('Error ocurred while connecting to MongoDB Atlas', err);
        } 
        else {
            const collection = client.db(dbName).collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS");
            client.close();
        }
    });
}

module.exports = {
    initialize
};
