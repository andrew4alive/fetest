
module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return async context => {
    //onsole.log(context.params.user);
    if(context.params.user._id==null) {
      throw new Error('not allow to access');
    }

  };

};
