

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    //onsole.log(context.params.user);
    if(context.params.user._id==null) {
      throw new Error('must haev user id');
    }
    var key = Object.keys(context.data);
    var mustkey=['username','password','server','protocal'];
    for(var i = 0 ;i<key.length;i++){
        if(mustkey.indexOf(key[i])!=-1)
          mustkey.splice(mustkey.indexOf(key[i]),1);
    }
    if(mustkey>0) {
        throw new Error('do not have require field');
    }
    var userid = context.params.user._id.toString();
    var app = context.app;
    await app.service('mqttcon').remove(null,{query:{
      "userid":userid
    }
    });


    context.data.userid = userid;
    context.data.createdAt = new Date().getTime()
    return context;
  };

};
