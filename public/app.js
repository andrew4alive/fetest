

document.querySelector('#msgform').addEventListener('submit', async ev => {
  ev.preventDefault();
  if(ev.target.id === 'msgform') {
    // This is the message text input field
    const input = document.querySelector('#msgtext');
    // Create a new message and then clear the input field
    await client.service('msg').create({
      text: input.value
    });
    //console.log('submit');
    input.value = '';
  }
});

document.querySelector('#tl').addEventListener('click', async ev => {
  ev.preventDefault();
  await client.service('mqttser').get({});
//  gettemp();
//  console.log('wpw');
});


document.querySelector('#logout').addEventListener('click', async ev => {
  ev.preventDefault();
  await client.logout();
  location.reload();
  console.log('logout');
});

document.querySelector('#getuser').addEventListener('click', async ev => {
  ev.preventDefault();
  client.authenticate()
   .then(response => {
     console.info('Feathers Client has Authenticated with the JWT access token!');
     console.log(response);
   })
   .catch(error => {
     console.info('We have not logged in with OAuth, yet.  This means there\'s no cookie storing the accessToken.  As a result, feathersClient.authenticate() failed.');
     console.log(error);
   });
});
//recieve data

client.service('msg').on('created',function(data){

 console.log(data);
});

client.service('mqttser').on('created',function(data){

//  console.log(data);
  gettemp();
/*  var d =data.data;
  var html="<br/>"
  for(var i=0;i<d.length;i++){
    html=html+"temperature:"+d[i]['message']+'<br/>'
  }
  document.querySelector("#tempresult").innerHTML = html;
*/
});

/*
setTimeout(function () {
  gettemp();
}, 1000);
*/
 function gettemp(){
    var d ={}
     client.service('mqttser').find().then(function(data){
  //    console.log(item);
  var d =data;
  var html="<br/>"
  for(var i=0;i<d.length;i++){
    html=html+"temperature:"+d[i]['message']+'<br/>'
  }
  document.querySelector("#tempresult").innerHTML = html;
/*)    setTimeout(function () {
      gettemp();
    }, 1000);)*/
    });

}
