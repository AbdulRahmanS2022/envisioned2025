(function(){
var h=document.documentElement,T={ar:"العقل الناطق: الذكاء الاصطناعي والذكاء البشري والإبداع",en:"The Rational Mind: AI, Human Intelligence and Creativity"};
function set(l){h.setAttribute("data-lang",l);h.lang=l;h.dir=l==="ar"?"rtl":"ltr";document.title=T[l];
document.querySelectorAll("img[data-alt-ar]").forEach(function(i){i.alt=i.getAttribute("data-alt-"+l)});
try{localStorage.setItem("lang",l)}catch(e){}}
var s="ar";try{s=localStorage.getItem("lang")||"ar"}catch(e){}
set(s);
document.getElementById("lang-btn").addEventListener("click",function(){set(h.getAttribute("data-lang")==="ar"?"en":"ar")});
})();
