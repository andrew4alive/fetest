


var mqtt = require('mqtt');
var mqtts = {};
mqtts.topics = [];
mqtts.connected =false;
mqtts.qos = 0;
mqtts.connect=function(cb){

  this.client  = mqtt.connect(process.env.mqtturl);
     this.client.on('connect', function () {
       mqtts.connected = true;
        console.log('connected');
    });
    this.client.on('close', function () {
      mqtts.connected = false;;
       console.log('not connected');
   });
   this.client.on('message',function(topic,message,packet){
        //console.log(topic,message,packet);
      //  console.log(topic,message.toString());

      cb(topic,message.toString());
   });
};

mqtts.publish=function(topic,cont){

  if(mqtts.connected){
  this.client.publish(topic, cont);
  return true;
  }
  return false;
};

mqtts.subcribe=function(topic){
  if(!this.connected) return false;
  var self = this;
    this.client.subscribe(topic,{qos:this.qos},function(error,granted){
          if(error != null)
        if(self.topics.indexOf(granted.topics) == -1)
        self.topics.push(granted.topic);

    });

};

mqtts.end=function(){
  if(this.connected)
    this.client.end();
};

module.exports = mqtts;
