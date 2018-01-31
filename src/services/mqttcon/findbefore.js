
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    //onsole.log(context.params.user);
    if(context.params.user._id==null) {
      throw new Error('must haev user id');
    }
    var uid= context.params.user._id.toString();
  //  console.log(context.params.query);
    context.params.query.userid=uid;
    return context;
  };

};
