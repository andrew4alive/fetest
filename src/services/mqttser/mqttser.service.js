// Initializes the `mqttser` service on path `/mqttser`
const createService = require('./mqttser.class.js');
const hooks = require('./mqttser.hooks');
var MongoClient = require('mongodb').MongoClient;

var mqtts = require('./mqttcon');
var mqttdb = require('./mqttdb');

module.exports = function (app) {


    mqttdb.name="fe";
    mqttdb.get('users',{},{
      limit:1 ,
      sort:['createdAt','desc']
    }).then(function(items){
      // console.log(items,items.length);
        for(var i=0;i<items.length;i++){
        //  console.log('yeah',items[i]._id);
          connectmqtt(items[i]._id.toString());
        }

    });

  //  mqtts.connect(1,null,getmqtt);

  const paginate = app.get('paginate');

  const options = {
    name: 'mqttser',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/mqttser', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mqttser');

  service.hooks(hooks);

  function getmqtt(topic,message){
    //console.log('new topic in');
    service.create({
      topic:topic, message:message,createdAt:new Date().getTime()
    });

  };

  app.on('login',function(r,m){
  //  if(!'user' in r) throw 'no user';
  //  if(!'._id' in r.user) throw 'user no id';
  var c = 0;
  //  console.log('login',r.user._id);
      if(r.user._id!=undefined){
    sub();
  }
    function sub(){
      if(mqtts.connected){
      mqtts.subcribe('sensor1/temp',r.user._id.toString());
    }else{
      if(c<=20){
        c=c+1;
      setTimeout(function () {
      //  console.log(r.user._id+'not connected');
        sub();
      }, 1000);
    }
    }

    }

  });

  ////
  function connectmqtt(uid){
  mqttdb.get('mqttcon',{userid:uid},{
    limit:1 ,
    sort:['createdAt','desc']
  }).then(function(items){
  //  console.log(items);
    var userid;
    //mqtt://peceohdh:CgstCRATNRdx@m14.cloudmqtt.com:16244
    for(var i=0;i<items.length;i++){
      var item = items[i];
      var url = item.protocal+'://'+item.username+':'+item.password+'@'
                + item.server+':'+item.port;
    userid = item.userid
    }
            //  console.log(url);
              mqtts.connect(userid,url,getmqtt);
  });
}


};
