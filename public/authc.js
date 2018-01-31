

client.authenticate()
 .then(response => {
   console.info('Feathers Client has Authenticated with the JWT access token!');
   console.log(response.accessToken);
   console.log(response.user);
   //window.location.hash="#/page=main";
 })
 .catch(error => {
   console.info('We have not logged in with OAuth, yet.  This means there\'s no cookie storing the accessToken.  As a result, feathersClient.authenticate() failed.');
   console.log(error);
   window.location.hash="#/page=notlogin"
 });




 function auth(cb){

   client.authenticate()
   .then(response => {
     //console.log(response.user._id);
     cb(response.user._id);
   })
   .catch(error => {
     console.info('We have not logged in with OAuth, yet.  This means there\'s no cookie storing the accessToken.  As a result, feathersClient.authenticate() failed.');
     console.log(error);
   });

 }
