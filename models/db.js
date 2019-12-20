const MongoClient = require('mongodb').MongoClient;

function initialize( dbName, dbCollectionName ) {
    const dbConnectionUrl = "mongodb+srv://root:Inception2575.-@testcluster-6itcv.mongodb.net/test?retryWrites=true&w=majority";
    const client = new MongoClient(dbConnectionUrl, { useUnifiedTopology: true, useNewUrlParser: true});

    client.connect(err => {
        if(err){
            console.log('Error ocurred while connecting to MongoDB Atlas', err);
        } 
        else {
            console.log("[MongoDB connection] SUCCESS");
            const collection = client.db(dbName).collection(dbCollectionName);
            collection.find().toArray((err, result) => {
                if(err) {
                    throw err;
                }
                console.log(result);
            });

            client.close();
        }
    });
}

module.exports = {
    initialize
};
