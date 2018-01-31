
//console.log(pageh.get('page'));
if(pageh.get('page')==false)  window.location.hash="#/page=main";

hashexe();
window.onhashchange =function(){

  hashexe();
};


function hashexe(){
  var page = pageh.control(
    [
      {page:"main" , templ:"#main"},
      {page:"notlogin" , templ:"#notlogin" },
      {page:"settings" , templ:"#settings" },
    ],
    [{page:"p404",templ:"#p404"}],
    '#page'
  );

  if(page==false) throw "link or container not exist";
}
