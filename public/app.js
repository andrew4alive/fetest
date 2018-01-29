

if(pageh.get('page')==false)  window.location.hash="#/page=main";
var page = pageh.control(
  [
    {page:"main",templ:"#main"},
    {page:"notlogin",templ:"#notlogin"}
  ],[{templ:"#p404"}],
  '#page'
);

if(page==false) throw "link or container not exist";
