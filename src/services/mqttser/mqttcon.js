


var mqtt = require('mqtt');
var mqtts = {};
mqtts.topics = [];
mqtts.connected =false;
mqtts.qos = 0;
mqtts.clients = {};
mqtts.connect=function(userid,url,cb){

  //var client  = mqtt.connect(process.env.mqtturl);
  var client  = mqtt.connect(url);
     client.on('connect', function () {
       mqtts.connected = true;
        console.log('connected');
    });
    client.on('close', function () {
      mqtts.connected = false;;
       console.log('not connected');
   });
   client.on('message',function(topic,message,packet){
        //console.log(topic,message,packet);
      //  console.log(topic,message.toString());

      cb(topic,message.toString());
   });

   this.clients[userid] = client;

};

mqtts.publish=function(topic,cont,userid){
  var key = Object.keys(this.clients);
  //console.log(key);
  //console.log(userid);
  if(key.indexOf(userid)==-1){
    //console.log('publish'+userid); 
    return false;}
  if(mqtts.connected){
  this.clients[userid].publish(topic, cont);
  return true;
  }
  return false;
};

mqtts.subcribe=function(topic,userid){

  var key = Object.keys(this.clients);
  //console.log(key);
  //console.log(userid);
  if(key.indexOf(userid)==-1){
    //console.log('publish'+userid);
     return false;}
  if(!this.connected) return false;
  var self = this;

    this.clients[userid].subscribe(topic,{qos:this.qos},function(error,granted){
          if(error != null)
        if(self.topics.indexOf(granted.topics) == -1)
        self.topics.push(granted.topic);

    });
 return true;
};

mqtts.end=function(userid){
  if(userid==undefined) {
    var keys=Object.key(this.clients);
    for(var i =0 ; i<keys.length ; i++)
    this.clients[keys[i]].end();
  }
  if(this.connected)
    this.clients[userid].end();
};

module.exports = mqtts;
