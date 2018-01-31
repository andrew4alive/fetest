



var  pageh={};
pageh.issupport=function(){
  function supportsImports() {
    return 'import' in document.createElement('link');
  }

  if (supportsImports()) {
    return true;
  } else {
    return false;
  }
};

pageh.get=function(h){
  var temp;
  var r;
  var hash= window.location.hash;
  if(hash.indexOf("#/")==0)  hash =hash.substr(2);
  if(hash.indexOf("#")==0)  hash =hash.substr(1);
  hash = hash.split('&');
  for(var i=0;i<hash.length;i++){
    temp = hash[i].split('=');
    if(temp.length==2){
      if(temp[0]==h) return temp[1];
    }

  }
  return false;
};

pageh.control=function(r,n,c){// r =route c= container n=not found page
      if(  !Array.isArray(r) && !Array.isArray(n) ) {
         throw "pageh.controk paramter error";
      }
      var keys;

    for (var i=0;i<r.length;i++){
      keys = Object.keys(r[i]);
      if( keys.indexOf('page')==-1 || keys.indexOf('templ')==-1) throw "pageh.control parameter error";
      if(r[i].page==this.get('page')) { return template(r[i].templ,c); }
    }
    keys = Object.keys(n[0]);
    if( keys.indexOf('page')==-1 || keys.indexOf('templ')==-1) throw "pageh.control parameter error";
     return template(n[0].templ,c);

    function template(t,c){
    var link = document.querySelector(t);
    var container = document.querySelector(c);
    if(link == null || container ==null ) return false;
    if(link.tagName!="LINK" || link.rel!="import") return false;
     // Clone the <template> in the import.
     var template = link.import.querySelector('template');

     var clone = document.importNode(template.content, true);
     container.innerHTML="";
     container.appendChild(clone);
     return true;
    }
};
