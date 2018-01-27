const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
var MongoClient = require('mongodb').MongoClient;

let conf = configuration();

let app = feathers()
  .configure(conf);

var url = app.get("mongodb");
var dbs = {};dbs.name="";
dbs.insert=function(collection,data){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbs.name);
  var myobj = data;
  dbo.collection(collection).insertOne(myobj, function(err, res) {
    if (err) throw err;
  //  console.log("1 document inserted");
    db.close();
  });
});
};
dbs.insertlimit=function(collection,data,limit,q){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db(dbs.name);
  var myobj = data;
  dbo.collection(collection).count(q,function(err,count){
    if(err) throw err;
  //  console.log(count); //return false;
    if(count>=limit){
        dbo.collection(collection).deleteMany(q,function(err,obj){
          if(err) throw err;
          dbo.collection(collection).insertOne(myobj, function(err, res) {
            if (err) throw err;
          //  console.log("1 document inserted");
            db.close();
          });

        });
    }
    else{
      dbo.collection(collection).insertOne(myobj, function(err, res) {
        if (err) throw err;
    //   console.log(res.ops);
        db.close();
      });

    }
  });

});
};

dbs.get =function(collection,q){

  return new Promise(function(resolve,reject){
  MongoClient.connect(url,async function(err, db) {
  if (err) reject( err);
  var dbo = db.db(dbs.name);
    await dbo.collection(collection).find(q).toArray(async function(err, result) {
    if (err) reject( err);
  //  console.log(result);
   r = result;
   resolve(result);
    db.close();

  });
});
});
};
/*
dbs.update=function(collection,data){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
   dbo = db.db(dbs.name);
  var myobj = data;
  db.collection(collection).insertOne(myobj, function(err, res) {
    if (err) throw err;
  //  console.log("1 document inserted");
    db.close();
  });
});
};
*/
module.exports = dbs;
