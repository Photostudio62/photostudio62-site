

var PS62={lang:"nl",ready:false,hooks:[],route:null,EN:(window.PS62EN||{})};
function T(s){
  if(PS62.lang!=="en"||typeof s!=="string")return s;
  var k=s.replace(/\s+/g," ").trim(),t=PS62.EN[k];if(t!==undefined)return t;
  var m;
  if(m=/^Bekijk groot: (.+)$/.exec(k))return "View full size: "+T(m[1]);
  if(m=/^Fotoshoot bij Photostudio62, foto (\d+)$/.exec(k))return "Photoshoot at Photostudio62, photo "+m[1];
  if(m=/^Bruiloft vastgelegd door Photostudio62, foto (\d+)$/.exec(k))return "Wedding captured by Photostudio62, photo "+m[1];
  if(m=/^Shoot van (.+)$/.exec(k))return m[1]+"'s shoot";
  return s;
}
function L(nl,en){return PS62.lang==="en"?en:nl}
function R(p){p=p||"";var m=/^([^\/?#]*)(\?[^\/#]*)?(?:\/(.*))?$/.exec(p),sl=m[1]||"",q=m[2]||"",sb=m[3]||"";var b=(PS62.lang==="en"?"/en":"")+(sl&&sl!=="home"?"/"+sl+"/":"/");if(b==="/en")b="/en/";return b+q+(sb?"#"+sb:"")}
PS62.apply=function(l){
  PS62.lang=l;document.documentElement.lang=l;
  var en=l==="en";
  document.querySelectorAll("a[data-href-en]").forEach(function(a){if(!a.__nlhref)a.__nlhref=a.getAttribute("href");a.setAttribute("href",en?a.getAttribute("data-href-en"):a.__nlhref)});
  function fix(t){return en?t.replace(/€(\d+),(\d{2})/g,"€$1.$2"):t}
  var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n,list=[];
  while(n=w.nextNode()){var pn=n.parentNode&&n.parentNode.nodeName;if(pn!=="SCRIPT"&&pn!=="STYLE")list.push(n)}
  list.forEach(function(n){
    if(n.__nl===undefined)n.__nl=n.nodeValue;
    var raw=n.__nl,key=raw.replace(/\s+/g," ").trim();if(!key)return;
    var t=fix(T(key)),lead=raw.match(/^\s*/)[0],trail=raw.match(/\s*$/)[0],nv=en?lead+t+trail:raw;
    if(n.nodeValue!==nv)n.nodeValue=nv;
  });
  var ATT=["alt","aria-label","title","placeholder","data-alt"];
  Array.prototype.forEach.call(document.body.querySelectorAll("*"),function(el){
    if(el.hasAttribute("data-noi18n"))return;
    ATT.forEach(function(a){
      if(!el.hasAttribute(a))return;el.__nla=el.__nla||{};
      if(el.__nla[a]===undefined)el.__nla[a]=el.getAttribute(a);
      var v=en?fix(T(el.__nla[a])):el.__nla[a];if(el.getAttribute(a)!==v)el.setAttribute(a,v);
    });
  });
  PS62.hooks.forEach(function(f){try{f()}catch(e){}});
};
/* Photostudio62 — interactie */
(function(){
  "use strict";
  var doc=document.documentElement; doc.classList.add("js");
  var PKG={"cakesmash": {"label": "Cakesmash", "items": [{"name": "Brons", "price": 275, "incl": ["Cakesmash-shoot", "20 bewerkte digitale foto's", "Taart naar keuze", "Duurt meestal 40 tot 45 minuten"]}, {"name": "Zilver", "price": 295, "flag": "Populair", "incl": ["Cakesmash-shoot", "Badsessie", "25 bewerkte digitale foto's", "Taart naar keuze", "Duurt meestal 45 tot 60 minuten"]}, {"name": "Goud", "price": 340, "flag": "Meest gekozen", "featured": true, "incl": ["Familiefoto's erbij", "Cakesmash-shoot", "Badsessie", "30 bewerkte foto's op usb", "Taart naar keuze", "8 afgedrukte foto's", "Duurt meestal 60 tot 75 minuten"]}]}, "zwangerschap": {"label": "Zwangerschap", "items": [{"name": "In de studio", "price": 250, "incl": ["30 digitale foto's, door jou gekozen", "Hele studio, meerdere achtergronden en settings"]}, {"name": "Op locatie", "price": 350, "flag": "Populair", "featured": true, "incl": ["Alle bewerkte foto's (75+)", "Geleverd op usb", "8 afgedrukte foto's"]}]}, "kids": {"label": "Kids shoot", "items": [{"name": "In de studio", "price": 250, "incl": ["25 digitale foto's, door jou gekozen", "Meerdere achtergronden en settings"]}, {"name": "Op locatie", "price": 350, "flag": "Populair", "featured": true, "incl": ["Alle bewerkte foto's (75+)", "Geleverd op usb", "8 afgedrukte foto's"]}]}, "genderreveal": {"label": "Gender reveal", "items": [{"name": "Foto's in de studio", "price": 250, "incl": ["Gender reveal in onze studio", "Wij denken mee over het idee", "Bewerkte digitale foto's", "Video erbij voor €150"]}, {"name": "Foto's op locatie", "price": 350, "incl": ["Buiten, op een plek naar keuze", "Wij denken mee over het idee en de plek", "Bewerkte digitale foto's", "Video erbij voor €150"]}, {"name": "Video in de studio", "price": 295, "incl": ["Een videoclip van het moment", "In onze studio", "Wij denken mee over het idee"]}, {"name": "Video op locatie", "price": 350, "incl": ["Een videoclip van het moment", "Buiten, op een plek naar keuze", "Wij denken mee over het idee en de plek"]}]}, "newlife": {"label": "New Life shoot", "items": [{"name": "In de studio", "price": 250, "incl": ["25 digitale foto's, door jou gekozen", "Ook met papa en mama op de foto"]}, {"name": "Op locatie", "price": 350, "flag": "Populair", "featured": true, "incl": ["Bij jou thuis", "Alle bewerkte foto's (75+)", "Geleverd op usb", "8 afgedrukte foto's"]}]}, "families": {"label": "Familieshoot", "items": [{"name": "In de studio", "price": 250, "incl": ["25 digitale foto's, door jou gekozen", "Hele studio, meerdere achtergronden en settings"]}, {"name": "Op locatie", "price": 350, "flag": "Populair", "featured": true, "incl": ["Alle bewerkte foto's (75+)", "Geleverd op usb", "8 afgedrukte foto's"]}]}, "portret": {"label": "Portret/generatiefoto", "items": [{"name": "Portret Classic", "price": 195, "incl": ["8 digitale foto's, door jou gekozen", "Zwarte of witte achtergrond"]}, {"name": "Generatiefoto", "price": 195, "incl": ["8 digitale foto's, door jou gekozen", "Kind, ouder en grootouder op één foto", "Zwarte of witte achtergrond"]}, {"name": "Combi portret + generatie", "price": 275, "flag": "Voordeel", "featured": true, "incl": ["Portret én generatiefoto in één shoot", "16 digitale foto's, door jou gekozen", "Je bespaart €115"]}]}};
  var EMAIL="info@photostudio62.nl";
  function $(s,c){return (c||document).querySelector(s)}
  function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
  function euro(n){return "€"+(Math.round(n*100)/100).toFixed(n%1?2:0).replace(".",PS62.lang==="en"?".":",")}
  function euroNL(n){return "€"+(Math.round(n*100)/100).toFixed(n%1?2:0).replace(".",",")}

  /* header + mobiele balk */
  var header=$(".site-header"), mbar=$(".mbar");
  var NOBAR={contact:1,"neem-contact-op":1,bedankt:1,"foto-bestellen":1,albums:1,cadeaukaart:1,"404":1};
  function updateBar(){if(!mbar)return;var v=document.querySelector(".view:not([hidden])"),sl=(v&&v.getAttribute("data-slug"))||"home",on=!NOBAR[sl];
    mbar.classList.toggle("show",on);document.documentElement.classList.toggle("has-mbar",on);
    var p=mbar.querySelector(".btn:not(.btn--ghost):not(.mbar-wa)");
    if(p){var c=v&&v.querySelector('.page-hero a.btn[data-r^="contact?shoot="]'),r=c?c.getAttribute("data-r"):"contact";p.setAttribute("data-r",r);p.setAttribute("href",typeof R==="function"?R(r):"#/"+r)}}
  function onScroll(){var y=window.scrollY;if(header)header.classList.toggle("is-scrolled",y>8)}
  window.addEventListener("scroll",onScroll,{passive:true});onScroll();PS62.hooks.push(function(){setTimeout(updateBar,40)});window.addEventListener("hashchange",function(){setTimeout(updateBar,80)});updateBar();setTimeout(updateBar,60);

  /* dropdown */
  $$(".nav-dd").forEach(function(dd){
    var b=$("button",dd);
    b.addEventListener("click",function(e){e.stopPropagation();var o=dd.classList.toggle("open");b.setAttribute("aria-expanded",o)});
    document.addEventListener("click",function(e){if(!dd.contains(e.target)){dd.classList.remove("open");b.setAttribute("aria-expanded","false")}});
    dd.addEventListener("keydown",function(e){if(e.key==="Escape"){dd.classList.remove("open");b.setAttribute("aria-expanded","false");b.focus()}});
  });

  /* mobiel menu */
  var burger=$(".burger"), mm=$(".mobile-menu");
  function setOpen(o){doc.classList.toggle("menu-open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",L(o?"Menu sluiten":"Menu openen",o?"Close menu":"Open menu"));if(o)mm.scrollTop=0}
  if(burger&&mm){
    burger.addEventListener("click",function(){setOpen(!doc.classList.contains("menu-open"))});
    mm.addEventListener("click",function(e){if(e.target.closest("a"))setOpen(false)});
    $$(".mm-sub>button",mm).forEach(function(b){b.addEventListener("click",function(){var li=b.parentElement,o=!li.classList.contains("open");$$(".mm-sub.open",mm).forEach(function(x){x.classList.remove("open");$("button",x).setAttribute("aria-expanded","false")});li.classList.toggle("open",o);b.setAttribute("aria-expanded",o)})});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&doc.classList.contains("menu-open")){setOpen(false);burger.focus()}});
    PS62.hooks.push(function(){setOpen(doc.classList.contains("menu-open"))});
    window.matchMedia("(min-width:1180px)").addEventListener("change",function(m){if(m.matches)setOpen(false)});
  }

  /* datumvelden dd-mm-jjjj (geen native date: iOS steekt uit) */
  window.PS62date=function(v){var m=/^(\d{2})-(\d{2})-(\d{4})$/.exec(v||"");if(!m)return null;var d=new Date(+m[3],+m[2]-1,+m[1],12);return d.getDate()==+m[1]&&d.getMonth()==+m[2]-1?d:null};
  $$("input[data-date]").forEach(function(inp){inp.addEventListener("input",function(e){if(e.inputType&&e.inputType.indexOf("delete")===0)return;var d=inp.value.replace(/\D/g,"").slice(0,8),o=d.slice(0,2);if(d.length>2)o+="-"+d.slice(2,4);if(d.length>4)o+="-"+d.slice(4);if(d.length===2||d.length===4)o+="-";inp.value=o})});

  /* koppen nooit midden in een woord breken: verklein tot het langste woord past */
  function fit(){
    $$("h1,h2").forEach(function(h){h.style.removeProperty("--fit");h.style.fontSize="";
      var cs=getComputedStyle(h),size=parseFloat(cs.fontSize),w=h.clientWidth;if(!w)return;
      var c=document.createElement("canvas").getContext("2d");c.font=cs.fontWeight+" "+size+"px "+cs.fontFamily;
      var longest=0;h.textContent.split(/\s+/).forEach(function(t){longest=Math.max(longest,c.measureText(t).width*(1+parseFloat(cs.letterSpacing||0)/size||1))});
      if(longest>w){var ns=Math.floor(size*w/longest*0.97);h.style.fontSize=ns+"px"}
    });
  }
  PS62.fit=fit;fit();window.addEventListener("resize",fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);

  /* hero: één keer de prints uitdelen */
  var stack=$(".hero-stack");
  if(stack){requestAnimationFrame(function(){setTimeout(function(){stack.classList.add("dealt")},120)})}

  /* jaartal */
  $$("[data-year]").forEach(function(el){el.textContent=new Date().getFullYear()});

  /* ---------- tabs pakketten ---------- */
  $$("[data-tabs]").forEach(function(wrap){
    var btns=$$('[role="tab"]',wrap);
    function show(id,push){
      btns.forEach(function(b){var on=b.getAttribute("aria-controls")===id;b.setAttribute("aria-selected",on);b.tabIndex=on?0:-1});
      $$('[role="tabpanel"]',wrap).forEach(function(p){p.hidden=p.id!==id});
    }
    btns.forEach(function(b,i){
      b.addEventListener("click",function(){show(b.getAttribute("aria-controls"),true)});
      b.addEventListener("keydown",function(e){var d=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;if(d){var n=btns[(i+d+btns.length)%btns.length];n.focus();n.click()}});
    });
    wrap.__show=show;
  });

  /* ---------- shoot-finder ---------- */
  var finder=$("#finder");
  if(finder){
    var steps=$$(".fstep",finder), bars=$$(".finder-progress i",finder), idx=0;
    var back=$("[data-back]",finder), next=$("[data-next]",finder), result=$(".finder-result",finder), nav=$(".finder-nav",finder);
    function val(n){var c=$('input[name="'+n+'"]:checked',finder);return c?c.value:null}
    function path(){var w=val("wat");return w==="cakesmash"?[0,2]:(w==="bruiloft"||w==="zakelijk")?[0]:[0,1]}
    function go(i){idx=i;var p=path();steps.forEach(function(s,k){s.hidden=k!==p[i]});bars.forEach(function(b,k){b.classList.toggle("on",k<=i);b.hidden=k>=p.length});back.style.visibility=i?"visible":"hidden";next.textContent=i===p.length-1?L("Toon mijn advies","Show my advice"):L("Volgende vraag","Next question")}
    finder.addEventListener("change",function(e){if(e.target.name&&idx<path().length-1){setTimeout(function(){go(idx+1)},220)}else if(e.target.name==="wat"&&path().length===1){setTimeout(function(){advise(val("wat"),null,null)},220)}});
    back.addEventListener("click",function(){go(Math.max(0,idx-1))});
    next.addEventListener("click",function(){
      var cs=val("wat")==="cakesmash",names=cs?["wat","wenscs"]:["wat","plek"];
      if(!val(names[idx])){var f=$('input[name="'+names[idx]+'"]',steps[path()[idx]]);f&&f.focus();return}
      if(idx<path().length-1){go(idx+1);return}
      if(cs)advise("cakesmash",val("wenscs"),null);else advise(val("wat"),null,val("plek"));
    });
    function advise(wat,wens,plek){
      var map={
        cakesmash:{basis:["cakesmash",0],midden:["cakesmash",1],luxe:["cakesmash",2]},
        zwanger:{basis:["zwangerschap",0],midden:["zwangerschap",0],luxe:["zwangerschap",1]},
        kids:{basis:["kids",0],midden:["kids",0],luxe:["kids",1]},newlife:{basis:["newlife",0],midden:["newlife",0],luxe:["newlife",1]},
        gezin:{basis:["portret",0],midden:["families",0],luxe:["families",1]}
      };
      var pages={cakesmash:"cake-smash",zwanger:"zwangerschap",kids:"kids-shoot",newlife:"new-life",gezin:"families",bruiloft:"weddings",zakelijk:"zakelijk"};
      var html,dim='style="margin:0 0 .4rem;color:#CDB9CF"';
      if(wat==="bruiloft"||wat==="zakelijk"){
        var t=wat==="bruiloft"?L("Bruiloft op maat","Tailor-made wedding"):L("Zakelijke shoot op maat","Tailor-made business shoot");
        var txt=wat==="bruiloft"?L("Elke trouwdag is anders. Je krijgt een vrijblijvende offerte na een kort kennismakingsgesprek.","Every wedding day is different. You'll receive a no-obligation quote after a short introductory meeting."):L("Elke opdracht is anders. Je krijgt een vrijblijvende offerte na een kort kennismakingsgesprek.","Every assignment is different. You'll receive a no-obligation quote after a short introductory meeting.");
        html='<div class="result-card"><p class="small" '+dim+'>'+L("Ons advies","Our advice")+'</p><h3>'+t+'</h3><p style="color:#E4D6E5">'+txt+'</p></div>';
      }else{
        var tw=(wat==="zwanger"||wat==="kids"||wat==="newlife"||wat==="gezin");if(tw)wens=plek==="locatie"?"luxe":"midden";
        var m=map[wat][wens], p=PKG[m[0]].items[m[1]];
        html='<div class="result-card"><p class="small" '+dim+'>'+L("Ons advies voor jou","Our advice for you")+'</p><h3>'+T(PKG[m[0]].label)+': '+T(p.name)+'</h3><div class="price">'+euro(p.price)+'</div><ul>'+p.incl.map(function(x){return"<li>"+T(x)+"</li>"}).join("")+'</ul></div>';
        if(plek==="locatie"&&!tw)html+='<p class="small muted" style="margin-top:1rem">'+L("Liever op locatie? Dat kan in Den Haag en omgeving. Vraag naar de mogelijkheden bij je aanvraag.","Prefer on location? That's possible in and around The Hague. Ask about the options when you request.")+'</p>';
      }
      var q="?shoot="+encodeURIComponent(wat)+(wat!=="bruiloft"&&wat!=="zakelijk"?"&pakket="+encodeURIComponent(map[wat][wens][0]+"-"+map[wat][wens][1]):"");
      html+='<div class="btn-row"><a class="btn" data-r="contact'+q+'" href="'+R("contact"+q)+'">'+L("Vraag deze shoot aan","Request this shoot")+'</a><a class="btn btn--ghost" data-r="'+pages[wat]+'" href="'+R(pages[wat])+'">'+L("Meer over deze shoot","More about this shoot")+'</a></div><p class="mt-2 small"><button type="button" class="textlink" style="background:none;border:0;padding:0;cursor:pointer;font:inherit" data-restart>'+L("Opnieuw beginnen","Start over")+'</button></p>';
      steps.forEach(function(s){s.hidden=true});nav.hidden=true;result.innerHTML=html;result.classList.add("show");
      $("[data-restart]",result).addEventListener("click",restart);
      result.setAttribute("tabindex","-1");result.focus({preventScroll:true});
    }
    function restart(){$$("input",finder).forEach(function(i){i.checked=false});result.classList.remove("show");result.innerHTML="";nav.hidden=false;go(0)}
    PS62.hooks.push(function(){if(result.classList.contains("show"))restart();else go(idx)});
    go(0);
  }

  /* ---------- planner: beste moment ---------- */
  $$("[data-planner]").forEach(function(box){
    var kind=box.getAttribute("data-planner"), input=$("input",box), out=$(".calc-out",box), btn=$("button",box), field=$(".field",box);
    function fmt(d){return new Intl.DateTimeFormat(PS62.lang==="en"?"en-GB":"nl-NL",{day:"numeric",month:"long",year:"numeric"}).format(d)}
    function addDays(d,n){var x=new Date(d);x.setDate(x.getDate()+n);return x}
    function addMonths(d,n){var x=new Date(d);x.setMonth(x.getMonth()+n);return x}
    PS62.hooks.push(function(){out.classList.remove("show");out.innerHTML=""});
    btn.addEventListener("click",function(){
      var d=PS62date(input.value);if(!d){field.classList.add("invalid");input.focus();return}
      field.classList.remove("invalid");
      var now=new Date();now.setHours(12,0,0,0);
      function fs(d){return new Intl.DateTimeFormat(PS62.lang==="en"?"en-GB":"nl-NL",{day:"numeric",month:"long"}).format(d)}
      function dd(a,b){return Math.round((b-a)/864e5)}
      var from,to,ready,line,status,start,end,lblA,lblB;
      if(kind==="cakesmash"){
        var bday=addMonths(d,12);from=addDays(bday,-21);to=from;ready=bday;
        line=L("Plan de cakesmash op <strong>"+fmt(from)+"</strong>. Na circa 3 weken levertijd heb je je foto's op de eerste verjaardag.","Plan the cakesmash on <strong>"+fmt(from)+"</strong>. After about 3 weeks of delivery time you will have your photos on the first birthday.");
        start=d;end=addDays(bday,14);lblA=L("Geboorte","Birth");lblB=L("1e verjaardag","1st birthday");
        if(now>bday)status=L("De eerste verjaardag is al geweest. Een cakesmash kan nog steeds, neem gerust contact op.","The first birthday has already passed. A cakesmash is still possible, feel free to get in touch.");
        else if(now>from)status=L("Je ideale datum is net voorbij. Neem snel contact op, dan zoeken we de eerstvolgende plek.","Your ideal date has just passed. Get in touch soon and we will find the next available slot.");
        else status=L("Nog "+dd(now,from)+" dagen tot je ideale shootdatum. Boek zo snel mogelijk: weekenden zijn snel vol.",dd(now,from)+" days left until your ideal shoot date. Book as soon as possible: weekends fill up fast.");
      }else{
        var conc=addDays(d,-280);from=addDays(conc,28*7);to=addDays(conc,33*7-1);ready=addDays(to,21);
        line=L("Plan je shoot tussen week 28 en 32: van <strong>"+fs(from)+"</strong> tot <strong>"+fmt(to)+"</strong>. Je foto's heb je circa 3 weken later, ruim voor de uitgerekende datum.","Plan your shoot between weeks 28 and 32: from <strong>"+fs(from)+"</strong> to <strong>"+fmt(to)+"</strong>. You will have your photos about 3 weeks later, well before your due date.");
        start=conc;end=d;lblA=L("Start zwangerschap","Start of pregnancy");lblB=L("Uitgerekende datum","Due date");
        var wk=Math.floor(dd(conc,now)/7);
        if(now>d)status=L("Deze datum ligt in het verleden. Klopt de uitgerekende datum?","This date is in the past. Is the due date correct?");
        else if(now>to)status=L("Je bent nu ongeveer "+wk+" weken zwanger, net voorbij het ideale venster. Neem contact op, er kan vaak nog veel.","You are now about "+wk+" weeks pregnant, just past the ideal window. Get in touch, a lot is often still possible.");
        else if(now>=from)status=L("Je bent nu ongeveer "+wk+" weken zwanger en zit in het ideale venster. Boek zo snel mogelijk.","You are now about "+wk+" weeks pregnant and in the ideal window. Book as soon as possible.");
        else status=L("Je bent nu ongeveer "+Math.max(wk,0)+" weken zwanger. Leg je datum nu vast, dan kun je kiezen binnen week 28 tot 32.","You are now about "+Math.max(wk,0)+" weeks pregnant. Lock in your date now and you can choose within weeks 28 to 32.");
      }
      var total=end-start, l=(from-start)/total*100, w=Math.max(1.2,(ready-from)/total*100), n=(now-start)/total*100;
      var cq="?shoot="+(kind==="cakesmash"?"cakesmash":"zwanger");
      out.innerHTML='<p class="small muted" style="margin:0">'+L("Jouw ideale shootmoment","Your ideal shoot moment")+'</p><p class="big">'+line+'</p><div class="timeline-bar" aria-hidden="true"><i style="left:'+l+'%;width:'+w+'%"></i>'+(n>0&&n<100?'<b style="left:'+n+'%" title="'+L("Vandaag","Today")+'"></b>':'')+'</div><div class="timeline-legend"><span>'+lblA+'</span><span>'+lblB+'</span></div><p style="margin:1rem 0 0">'+status+'</p><div class="btn-row" style="margin-top:1rem"><a class="btn btn--sm" data-r="contact'+cq+'" href="'+R("contact"+cq)+'">'+L("Vraag een datum aan","Request a date")+'</a></div>';
      out.classList.add("show");
    });
  });

  /* ---------- wanddecoratie ---------- */
  var wall=$("#wall");
  if(wall){
    var PR={
      canvas:{label:"Canvas",sizes:{"30×20":74.95,"30×40":89.95,"60×40":99.95,"80×60":104.95,"100×70":119.95,"120×80":125.95,"150×100":165}},
      plexi:{label:"Plexiglas",sizes:{"30×20":78.95,"30×40":94.95,"60×40":104.95,"80×60":110.95,"100×70":125.95,"120×80":132.95}},
      poster:{label:"Poster",sizes:{"30×40":85.95,"80×60":99.95,"120×80":119.95}}
    };
    var state={m:"canvas",s:"80×60",o:"land",cw:90,ch:60};
    var mSeg=$("#w-mat"), sSeg=$("#w-size"), oSeg=$("#w-ori"), art=$(".wall-art",wall), priceEl=$("#w-price"), sum=$("#w-sum"), link=$("#w-link");
    var stage=$(".wall-stage",wall);
    function renderSizes(){
      var sizes=Object.keys(PR[state.m].sizes);
      if(state.s!=="custom"&&sizes.indexOf(state.s)<0)state.s=sizes[Math.min(2,sizes.length-1)];
      sSeg.innerHTML=sizes.map(function(s){return'<button type="button" aria-pressed="'+(s===state.s)+'" data-s="'+s+'">'+s+' cm</button>'}).join("")+'<button type="button" aria-pressed="'+(state.s==="custom")+'" data-s="custom">'+L("Eigen formaat","Custom size")+'</button>';
    }
    function draw(){
      $$("button",mSeg).forEach(function(b){b.setAttribute("aria-pressed",b.dataset.m===state.m)});
      $$("button",sSeg).forEach(function(b){b.setAttribute("aria-pressed",b.dataset.s===state.s)});
      $$("button",oSeg).forEach(function(b){b.setAttribute("aria-pressed",b.dataset.o===state.o)});
      var cust=state.s==="custom",p=cust?[state.cw,state.ch]:state.s.split("×").map(Number), wcm=Math.max(p[0],p[1]), hcm=Math.min(p[0],p[1]);$("#w-custom").hidden=!cust;
      if(state.o==="port"){var t=wcm;wcm=hcm;hcm=t}
      // podium = 320 cm breed muurtje
      var W=stage.clientWidth, cm=W/346.6;
      stage.style.setProperty("--sofa-w",(210*cm)+"px");stage.style.setProperty("--sofa-h",(80*cm)+"px");
      var vs=Math.min(1,170/wcm,120/hcm);art.style.width=(wcm*vs*cm)+"px";art.style.height=(hcm*vs*cm)+"px";
      art.className="wall-art m-"+state.m;
      var price=cust?0:PR[state.m].sizes[state.s];
      priceEl.textContent=cust?L("Prijs op aanvraag","Price on request"):euro(price);priceEl.style.fontSize=cust?"1.7rem":"";
      var sz=cust?(state.cw+"×"+state.ch):state.s,sumNL=PR[state.m].label+", "+sz+" cm, "+(state.o==="port"?"staand":"liggend");
      sum.textContent=L(sumNL,T(PR[state.m].label)+", "+sz+" cm, "+(state.o==="port"?"portrait":"landscape"));
      var wq="foto-bestellen?m="+state.m+"&s="+encodeURIComponent(state.s)+"&o="+state.o+(cust?"&w="+state.cw+"&h="+state.ch:"");link.href=R(wq);link.setAttribute("data-r",wq);
    }
    mSeg.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;state.m=b.dataset.m;renderSizes();draw()});
    sSeg.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;state.s=b.dataset.s;draw()});
    oSeg.addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;state.o=b.dataset.o;draw()});
    ["w-cw","w-ch"].forEach(function(id){$("#"+id).addEventListener("input",function(){var n=parseFloat(this.value);if(n>=10&&n<=300){state[id==="w-cw"?"cw":"ch"]=n;draw()}})});
    window.addEventListener("resize",draw);
    renderSizes();draw();
    PS62.drawWall=function(){renderSizes();draw()};PS62.hooks.push(function(){renderSizes();draw()});
  }

  document.addEventListener("click",function(e){var n=e.target.closest(".pgal-nav");if(!n)return;var t=n.closest(".pgal").querySelector(".pgal-track");var d=n.classList.contains("next")?1:-1;var max=t.scrollWidth-t.clientWidth;if(d>0&&t.scrollLeft>=max-4)t.scrollTo({left:0,behavior:"smooth"});else if(d<0&&t.scrollLeft<=4)t.scrollTo({left:max,behavior:"smooth"});else t.scrollBy({left:d*(t.clientWidth+(parseFloat(getComputedStyle(t).columnGap)||0)),behavior:"smooth"})});
  document.addEventListener("scroll",function(e){var t=e.target;if(!t||!t.classList||!t.classList.contains("pgal-track"))return;var c=t.parentNode.querySelector(".pgal-count b");var g=parseFloat(getComputedStyle(t).columnGap)||0;if(c)c.textContent=Math.round(t.scrollLeft/(t.clientWidth+g))+1},true);
  function gotoTab(id){try{sessionStorage.setItem("ps62tab",id)}catch(x){}setTimeout(function(){var b=document.getElementById("gtab-"+id);if(b)b.click()},400)}
  document.addEventListener("click",function(e){var a=e.target.closest("[data-gtab]");if(a){gotoTab(a.getAttribute("data-gtab"));return}var pb=e.target.closest(".pgal-page button");if(pb&&!document.querySelector(".lightbox")){var s=pb.closest("section"),l=s&&s.querySelector("[data-gtab]");if(l){gotoTab(l.getAttribute("data-gtab"));location.href=l.href}}});
  (function(){var id;try{id=sessionStorage.getItem("ps62tab");sessionStorage.removeItem("ps62tab")}catch(x){}if(id)setTimeout(function(){var b=document.getElementById("gtab-"+id);if(b)b.click()},300)})();
  function pgCounts(){var mob=window.matchMedia("(max-width:700px)").matches;document.querySelectorAll(".pgal").forEach(function(g){var n=g.querySelectorAll(".pgal-page button").length,tot=Math.max(1,Math.ceil(n/(mob?4:8))),c=g.querySelector(".pgal-count");if(c)c.innerHTML="<b>1</b> / "+tot;var t=g.querySelector(".pgal-track");if(t)t.scrollLeft=0})}
  pgCounts();window.addEventListener("resize",pgCounts);if(window.PS62&&PS62.hooks)PS62.hooks.push(pgCounts);
  function rvApply(g){var f=g.getAttribute("data-f")||"all",lim=+g.getAttribute("data-lim")||12,n=0,tot=0;g.querySelectorAll(".rv-card").forEach(function(c){var ok=f==="all"||c.getAttribute("data-t")===f;if(ok){tot++;c.hidden=n>=lim;n++}else c.hidden=true});var b=document.querySelector("[data-rvmore]");if(b)b.hidden=tot<=lim}
  document.addEventListener("click",function(e){var c=e.target.closest("[data-rvf]");if(c){var g=document.getElementById("rv-all");if(!g)return;g.setAttribute("data-f",c.getAttribute("data-rvf"));g.setAttribute("data-lim","12");c.parentNode.querySelectorAll("[data-rvf]").forEach(function(x){x.setAttribute("aria-pressed",x===c?"true":"false")});rvApply(g);return}var m=e.target.closest("[data-rvmore]");if(m){var g2=document.getElementById("rv-all");g2.setAttribute("data-lim",String((+g2.getAttribute("data-lim")||12)+12));rvApply(g2)}});
  (function(){var g=document.getElementById("rv-all");if(g)rvApply(g)})();
  /* ---------- galerij lightbox ---------- */
  var lb=$(".lightbox");
  if(lb){
    var items=[], cur=0, frame=$(".lb-frame",lb), count=$(".lb-count",lb), lastFocus;
    function open(i){cur=(i+items.length)%items.length;var src=items[cur].dataset.full, alt=items[cur].dataset.alt||"";
      frame.innerHTML='<img src="'+src+'" alt="'+alt+'" onerror="this.remove()">';count.textContent=(cur+1)+" / "+items.length;
      if(!lb.classList.contains("open")){lastFocus=document.activeElement;lb.classList.add("open");document.body.style.overflow="hidden";$(".lb-close",lb).focus()}}
    function close(){lb.classList.remove("open");document.body.style.overflow="";lastFocus&&lastFocus.focus()}
    function vis(){return $$(".masonry button").filter(function(b){return !b.closest("[hidden]")})}
    $$(".masonry button, .swipe button, .pgal-page button").forEach(function(b){b.addEventListener("click",function(){var sw=b.closest(".swipe,.pgal");items=sw?Array.prototype.slice.call(sw.querySelectorAll("button[data-full]")):vis();open(items.indexOf(b))})});
    $$(".swipe-nav").forEach(function(n){n.addEventListener("click",function(){var sw=n.parentNode.querySelector(".swipe");sw.scrollBy({left:(n.classList.contains("next")?1:-1)*sw.clientWidth*0.85,behavior:"smooth"})})});
    $(".lb-close",lb).addEventListener("click",close);
    $(".lb-prev",lb).addEventListener("click",function(){open(cur-1)});
    $(".lb-next",lb).addEventListener("click",function(){open(cur+1)});
    lb.addEventListener("click",function(e){if(e.target===lb)close()});
    document.addEventListener("keydown",function(e){if(!lb.classList.contains("open"))return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")open(cur-1);if(e.key==="ArrowRight")open(cur+1)});
    var tx=null;lb.addEventListener("touchstart",function(e){tx=e.touches[0].clientX},{passive:true});
    lb.addEventListener("touchend",function(e){if(tx===null)return;var dx=e.changedTouches[0].clientX-tx;if(Math.abs(dx)>50)open(cur+(dx<0?1:-1));tx=null});
  }

  /* ---------- aanvraagformulier ---------- */
  var form=$("#booking");
  if(form){
    var bsteps=$$(".bstep",form), bi=0, sm=$("#sum"), shootSel=$("#f-shoot"), pkgSel=$("#f-pkg");
    var SHOOTS={cakesmash:"Cakesmash",zwanger:"Zwangerschap",genderreveal:"Gender reveal",kids:"Kids shoot",newlife:"New Life shoot",gezin:"Familieshoot",portret:"Portret/generatiefoto",bruiloft:"Bruiloft",zakelijk:"Zakelijk",nabestelling:"Nabestelling / wanddecoratie",studiohuur:"Studio huren"};
    var PKGMAP={cakesmash:"cakesmash",zwanger:"zwangerschap",genderreveal:"genderreveal",kids:"kids",newlife:"newlife",gezin:"families",portret:"portret"};
    function fillPkgs(){
      var k=PKGMAP[shootSel.value], opts='<option value="">'+T("Weet ik nog niet")+'</option>';
      if(k)PKG[k].items.forEach(function(p,i){opts+='<option value="'+k+"-"+i+'" data-nl="'+p.name+" ("+euroNL(p.price)+')">'+T(p.name)+" ("+euro(p.price)+")</option>"});
      else if(shootSel.value==="bruiloft"||shootSel.value==="zakelijk")opts='<option value="">'+T("Offerte op maat")+'</option>';
      pkgSel.innerHTML=opts;
    }
    shootSel.addEventListener("change",function(){fillPkgs();upd()});
    function prefill(qs){
      if(qs.get("shoot")&&SHOOTS[qs.get("shoot")])shootSel.value=qs.get("shoot");
      fillPkgs();
      if(qs.get("pakket"))pkgSel.value=qs.get("pakket");var fv=$("#f-video");if(fv)fv.checked=qs.get("video")==="1";
      if(qs.get("uren")&&/^\d{1,2}$/.test(qs.get("uren"))){var u=+qs.get("uren");$("#f-msg").value="Ik wil graag de studio huren voor "+u+" uur (€"+(195+(u-1)*(u>=4?75:95))+", exclusief fotograaf).\n"}
      if(qs.get("nabestelling")){shootSel.value="nabestelling";fillPkgs();$("#f-msg").value="Ik wil graag bestellen: "+qs.get("nabestelling")+".\n"}
      upd();
    }
    PS62.prefill=prefill;fillPkgs();
    PS62.hooks.push(function(){var cv=pkgSel.value;fillPkgs();pkgSel.value=cv;upd();goB(bi)});
    function v(id){var el=$("#"+id);return el?el.value.trim():""}
    function upd(){
      var cs=v("f-shoot")==="cakesmash",gr=v("f-shoot")==="genderreveal",vf=$("#video-field"),vidOn=cs||(gr&&!/^genderreveal-[23]$/.test(pkgSel.value));if(vf){vf.hidden=!vidOn;if(!vidOn)$("#f-video").checked=false}var af=$("#allergy-field"),tf=$("#terms-field"),tc=$("#f-terms");if(af)af.hidden=!cs;var cf=$("#child-field");if(cf)cf.hidden=!(cs||v("f-shoot")==="kids");if(tf){tf.hidden=!cs;tc.required=cs}
      var rows=[[T("Shoot"),T(SHOOTS[v("f-shoot")])||"–"],[T("Pakket"),pkgSel.value?pkgSel.options[pkgSel.selectedIndex].text:"–"]].concat(vidOn?[[T("Highlightvideo"),$("#f-video").checked?L("Ja, +€150","Yes, +€150"):L("Nee","No")]]:[]).concat([[T("Voorkeur"),PS62date(v("f-date"))?PS62date(v("f-date")).toLocaleDateString(PS62.lang==="en"?"en-GB":"nl-NL",{weekday:"short",day:"numeric",month:"long"}):"–"],[T("Dagdeel"),T(v("f-part"))||"–"],[T("Waar"),v("f-where")||"–"],[T("Naam"),v("f-name")||"–"]]);
      sm.innerHTML=rows.map(function(r){return"<dt>"+r[0]+"</dt><dd>"+r[1]+"</dd>"}).join("");
    }
    form.addEventListener("input",upd);form.addEventListener("change",upd);upd();
    function check(step){
      var ok=true;
      $$("[required]",step).forEach(function(el){
        var f=el.closest(".field"), good=el.type==="checkbox"?el.checked:(el.value.trim()!==""&&(el.type!=="email"||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value)));
        f.classList.toggle("invalid",!good);if(!good&&ok){el.focus();ok=false}
      });
      $$("input[data-date]",step).forEach(function(el){var f=el.closest(".field"),good=!el.value||!!PS62date(el.value);f.classList.toggle("invalid",!good);if(!good&&ok){el.focus();ok=false}});
      return ok;
    }
    function goB(i){bi=i;bsteps.forEach(function(s,k){s.hidden=k!==i});$("#bprog").textContent=L("Stap "+(i+1)+" van "+bsteps.length,"Step "+(i+1)+" of "+bsteps.length);var h=$("h3",bsteps[i]);h&&h.focus&&(h.tabIndex=-1,h.focus({preventScroll:true}))}
    form.addEventListener("click",function(e){
      if(e.target.matches("[data-bnext]")){if(check(bsteps[bi]))goB(bi+1)}
      if(e.target.matches("[data-bback]"))goB(bi-1);
    });
    form.addEventListener("submit",function(e){
      e.preventDefault();if(!check(bsteps[bi]))return;
      var lines=["Nieuwe aanvraag via photostudio62.nl","","Let op: dit is een aanvraag, nog geen boeking. Wij nemen binnen 24 uur contact met je op via WhatsApp om de shoot door te nemen. Na het vaststellen van een dag en tijd en de aanbetaling is je shoot definitief.","","Shoot: "+(SHOOTS[v("f-shoot")]||"-"),"Pakket: "+(pkgSel.value?(pkgSel.options[pkgSel.selectedIndex].getAttribute("data-nl")||pkgSel.options[pkgSel.selectedIndex].text):"nog niet gekozen"),"Voorkeursdatum: "+(v("f-date")||"-"),"Dagdeel: "+(v("f-part")||"-"),"Locatie: "+(v("f-where")||"-"),"Aantal personen: "+(v("f-people")||"-"),(v("f-shoot")==="cakesmash"||(v("f-shoot")==="genderreveal"&&!/^genderreveal-[23]$/.test(pkgSel.value)))?"Highlightvideo (+€150): "+($("#f-video").checked?"ja":"nee"):null,"","Naam: "+v("f-name"),"E-mail: "+v("f-mail"),"Telefoon: "+(v("f-tel")||"-"),"",(v("f-shoot")==="cakesmash"||v("f-shoot")==="kids")?"Over mijn kind: "+(v("f-child")||"niets opgegeven"):null,v("f-shoot")==="cakesmash"?"Allergie\u00ebn/dieetwensen taart: "+(v("f-allergy")||"geen opgegeven"):null,"Foto's delen op social media: "+(function(){var x=(document.querySelector("input[name=social]:checked")||{}).value||"Weet ik nog niet";return x==="Ja"?"Ja (5 extra foto's cadeau)":x})(),v("f-shoot")==="cakesmash"?"Algemene voorwaarden: gelezen en akkoord":null,"","Bericht:",v("f-msg")||"-"].filter(function(x){return x!==null});
      var body=lines.join("\n"), subj="Aanvraag "+(SHOOTS[v("f-shoot")]||"fotoshoot")+" - "+v("f-name");
      var mail="mailto:"+EMAIL+"?cc="+encodeURIComponent(v("f-mail"))+"&subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body);
      PS62.lastReq={mail:mail,body:body};
      var sb_=form.querySelector("button[type=submit]"),sbt_=sb_?sb_.textContent:"";if(sb_){sb_.disabled=true;sb_.textContent=L("Versturen\u2026","Sending\u2026")}PS62.send({type:"boeking",subject:subj,body:body,replyTo:v("f-mail"),name:v("f-name")}).then(function(){try{sessionStorage.setItem("ps62sent","1")}catch(err){}location.href=R("bedankt")}).catch(function(){try{sessionStorage.setItem("ps62req",JSON.stringify(PS62.lastReq))}catch(err){}location.href=R("bedankt")});return;
      form.reset();goB(0);
    });
    var copyBtn=$("#copy-btn");
    if(copyBtn)copyBtn.addEventListener("click",function(){
      var t=$("#copy-text");
      (navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).then(function(){copyBtn.textContent=L("Gekopieerd","Copied")},function(){t.hidden=false;t.select();copyBtn.textContent=L("Selecteer en kopieer de tekst","Select and copy the text")});
    });
  }
})();


/* route: reistijdcalculator (adres + starttijd -> beste vertrektijd) */
(function(){
  var calcs=[].slice.call(document.querySelectorAll(".rt-calc"));if(!calcs.length)return;
  var STUDIO={lat:52.0133,lon:4.2235},studioReady=null;
  function pdok(q,rows){
    return fetch("https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?rows="+rows+"&fl=weergavenaam,centroide_ll&fq=type:(adres%20OR%20postcode%20OR%20woonplaats%20OR%20weg)&q="+encodeURIComponent(q)).then(function(r){return r.json()}).then(function(j){
      return((j.response&&j.response.docs)||[]).map(function(d){var m=/POINT\(([-\d.]+) ([-\d.]+)\)/.exec(d.centroide_ll||"");return m?{name:d.weergavenaam,lon:+m[1],lat:+m[2]}:null}).filter(Boolean)})
  }
  function nomi(q,rows){return fetch("https://nominatim.openstreetmap.org/search?format=json&limit="+rows+"&q="+encodeURIComponent(q)).then(function(r){return r.json()}).then(function(a){return a.map(function(d){return{name:d.display_name,lat:+d.lat,lon:+d.lon}})})}
  function geocode(q,rows){return pdok(q,rows).then(function(a){return a.length?a:nomi(q,rows)}).catch(function(){return nomi(q,rows)})}
  function studio(){if(!studioReady)studioReady=pdok("ABC Westland 259 Poeldijk",1).then(function(a){if(a[0]){STUDIO.lat=a[0].lat;STUDIO.lon=a[0].lon}}).catch(function(){});return studioReady}
  /* verwachte drukte op een gewone doordeweekse dag (Randstad), factor t.o.v. een vrije weg */
  var RUSH=[[6,7,1.25],[7,9,1.7],[9,9.5,1.3],[9.5,15.5,1.1],[15.5,16.5,1.3],[16.5,18.5,1.75],[18.5,19.5,1.3],[19.5,22,1.05]];
  function factor(dt,km){var h=dt.getHours()+dt.getMinutes()/60,fa=1.02;for(var i=0;i<RUSH.length;i++)if(h>=RUSH[i][0]&&h<RUSH[i][1]){fa=RUSH[i][2];break}return 1+(fa-1)*Math.min(1,.4+km/40)}
  function hav(a,b){var R=6371,r=Math.PI/180,dl=(b.lat-a.lat)*r,dn=(b.lon-a.lon)*r,x=Math.sin(dl/2)*Math.sin(dl/2)+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dn/2)*Math.sin(dn/2);return 2*R*Math.asin(Math.sqrt(x))}
  function route(o){
    var url="https://router.project-osrm.org/route/v1/driving/"+o.lon+","+o.lat+";"+STUDIO.lon+","+STUDIO.lat+"?overview=false";
    var t=new Promise(function(_,rej){setTimeout(function(){rej(new Error("timeout"))},9000)});
    return Promise.race([fetch(url).then(function(r){return r.json()}),t]).then(function(j){if(!j.routes||!j.routes[0])throw new Error("none");return{sec:j.routes[0].duration,km:j.routes[0].distance/1000,est:false}})
      .catch(function(){var km=hav(o,STUDIO)*1.3;return{sec:km/70*3600,km:km,est:true}});
  }
  function hm(d){return("0"+d.getHours()).slice(-2)+":"+("0"+d.getMinutes()).slice(-2)}
  function label(eff){return eff>=1.4?L("Spitsdrukte","Rush-hour traffic"):eff>=1.2?L("Druk","Busy"):eff>=1.07?L("Licht druk","Slightly busy"):L("Rustig","Quiet")}
  var OK='<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  function fld(el){while(el&&!(el.classList&&el.classList.contains("field")))el=el.parentNode;return el}
  function init(c){
    function q(n){return c.querySelector('[data-f="'+n+'"]')}
    var f=q("form"),addr=q("addr"),list=q("list"),res=q("res"),shootEl=q("shoot"),pick=null,timer=null,items=[],hi=-1,seq=0;
    function closeList(){list.hidden=true;addr.setAttribute("aria-expanded","false");hi=-1}
    function render(){list.innerHTML="";items.forEach(function(it,i){var li=document.createElement("li");li.setAttribute("role","option");li.textContent=it.name;li.addEventListener("mousedown",function(e){e.preventDefault();choose(i)});list.appendChild(li)});list.hidden=!items.length;addr.setAttribute("aria-expanded",items.length?"true":"false")}
    function choose(i){pick=items[i];addr.value=pick.name;closeList()}
    addr.addEventListener("input",function(){pick=null;clearTimeout(timer);var s=addr.value.trim();if(s.length<3){items=[];closeList();return}var my=++seq;timer=setTimeout(function(){pdok(s,6).then(function(a){if(my!==seq)return;items=a;hi=-1;render()}).catch(function(){})},250)});
    addr.addEventListener("keydown",function(e){if(list.hidden)return;var lis=list.children;if(e.key==="ArrowDown"||e.key==="ArrowUp"){e.preventDefault();hi=(hi+(e.key==="ArrowDown"?1:-1)+lis.length)%lis.length;for(var k=0;k<lis.length;k++)lis[k].setAttribute("aria-selected",k===hi)}else if(e.key==="Enter"&&hi>=0){e.preventDefault();choose(hi)}else if(e.key==="Escape")closeList()});
    addr.addEventListener("blur",function(){setTimeout(closeList,120)});
    f.addEventListener("input",function(e){var x=fld(e.target);x&&x.classList.remove("invalid")});
    f.addEventListener("submit",function(e){
      e.preventDefault();var ok=true,first=null;
      [addr,shootEl].forEach(function(el){var good=el.value.trim()!=="";fld(el).classList.toggle("invalid",!good);if(!good){ok=false;first=first||el}});
      if(!ok){first.focus();return}
      var btn=f.querySelector("button[type=submit]"),bt=btn.textContent;btn.disabled=true;btn.textContent=L("Even rekenen…","Calculating…");
      studio().then(function(){return pick?pick:geocode(addr.value.trim(),1).then(function(a){return a[0]})}).then(function(o){
        if(!o){var af=fld(addr);af.classList.add("invalid");af.querySelector(".err").textContent=L("We konden dit adres niet vinden. Probeer straat, huisnummer en plaats.","We could not find this address. Try street, number and town.");addr.focus();return}
        return route(o).then(function(r){show(o,r)})
      }).catch(function(){var af=fld(addr);af.classList.add("invalid");af.querySelector(".err").textContent=L("Er ging iets mis. Probeer het zo nog eens.","Something went wrong. Please try again.")}).then(function(){btn.disabled=false;btn.textContent=bt});
    });
    function show(o,r){
      var p=shootEl.value.split(":"),shoot=new Date(2027,0,5,+p[0],+p[1],0),target=new Date(shoot.getTime()-15*60000),base=r.sec;
      function tt(dep){return base*factor(dep,r.km)}
      var dep=new Date(target.getTime()-base*1000);for(var i=0;i<8;i++)dep=new Date(target.getTime()-tt(dep)*1000);
      dep=new Date(Math.floor(dep.getTime()/60000)*60000);
      var eff=factor(dep,r.km),mins=Math.ceil(tt(dep)/60),safe=new Date(dep.getTime()-10*60000),m=Math.round(r.km*10)/10;
      q("badge").innerHTML=OK;res.className="rt-res rt-ok";
      q("title").textContent=L("Vertrek uiterlijk om "+hm(dep),"Leave by "+hm(dep)+" at the latest");
      q("sub").textContent=L("Dan ben je om "+hm(target)+" bij ons, 15 minuten voor de start van je shoot om "+hm(shoot)+". Wil je wat marge? Vertrek dan rond "+hm(safe)+".","Then you are with us at "+hm(target)+", 15 minutes before your shoot starts at "+hm(shoot)+". Want some margin? Then leave around "+hm(safe)+".");
      var rows=[[L("Afstand","Distance"),m.toString().replace(".",L(",","."))+" km"],[L("Reistijd","Travel time"),mins+" min"],[L("Verwachte drukte","Expected traffic"),label(eff)+(eff>1.07?" (+"+Math.round((eff-1)*100)+"%)":"")],[L("Uiterlijk vertrekken","Leave by"),hm(dep)],[L("Aanwezig bij ons","Be here at"),hm(target)],[L("Start shoot","Shoot starts"),hm(shoot)]];
      q("facts").innerHTML=rows.map(function(x){return"<dt>"+x[0]+"</dt><dd>"+x[1]+"</dd>"}).join("");
      q("note").textContent=(r.est?L("Let op: de routeservice was niet bereikbaar, dit is een grove schatting op basis van de hemelsbrede afstand. ","Note: the route service was not reachable, so this is a rough estimate based on the straight-line distance. "):"")+L("Wij rekenen met de gebruikelijke drukte op een doordeweekse dag. In het weekend is het meestal rustiger. Check vlak voor vertrek je navigatie.","We use the usual traffic on a weekday. At weekends it is usually quieter. Check your navigation right before you leave.");
      q("gmaps").href="https://www.google.com/maps/dir/?api=1&origin="+encodeURIComponent(o.lat+","+o.lon)+"&destination="+encodeURIComponent("ABC Westland 259, 2685 DC Poeldijk")+"&travelmode=driving";
      res.hidden=false;res.focus();
    }
    PS62.hooks.push(function(){res.hidden=true});
  }
  calcs.forEach(init);
})();


/* albumconfigurator */
(function(){
  var f=document.getElementById("album");if(!f)return;
  var $=function(i){return document.getElementById(i)};
  var SZ={s:{l:"15 × 20 cm",p:97,r:"4/3",w:"76%"},m:{l:"20 × 30 cm",p:112,r:"3/2",w:"100%"}};
  var COL=[["Crème wit","Cream white","#dad4ca","l"],["Zand","Sand","#9f8f78","l"],["Mokka","Mocha","#7a6455","l"],["Terracotta","Terracotta","#78372a","l"],["Mosgroen","Moss green","#6e7767","l"],["Saliegroen","Sage green","#a7aa96","l"],["Antraciet","Charcoal","#555555","l"],["Lichtgrijs","Light grey","#a4a6a3","l"],["Rood","Red","#903331","l"],["Hemelsblauw","Sky blue","#a8c8cf","l"],["Roze","Pink","#ca98a4","l"],["Oudroze","Dusty rose","#9c6c6a","l"],
    ["Steengrijs","Stone grey","#b9b3ad","n"],["Blush","Blush","#bdaa9f","n"],["Zilvergrijs","Silver grey","#b3aea9","n"],["Naturel","Natural","#a79d92","n"],["Bruin","Brown","#716051","n"]];
  var SW=(window.PS62ALB||{}).SW||[];
  var TT=(window.PS62ALB||{}).TT||[];
  var CV=(window.PS62ALB||{}).CV||[];
  var st={size:"m",col:0,print:false,mode:"up",sp:5,files:[]};
  var MAXF=40,MAXSP=12;
  function eur(n){return "€"+n}
  function lum(h){var r=parseInt(h.substr(1,2),16),g=parseInt(h.substr(3,2),16),b=parseInt(h.substr(5,2),16);return (0.299*r+0.587*g+0.114*b)/255}
  function cn(i){return L(COL[i][0],COL[i][1])}
  function drawSw(){
    ["l","n"].forEach(function(g){
      var box=$("a-sw-"+g);box.innerHTML="";
      COL.forEach(function(c,i){if(c[3]!==g)return;var b=document.createElement("button");b.type="button";b.className="alb-sw";b.setAttribute("role","radio");b.setAttribute("aria-checked",i===st.col?"true":"false");b.setAttribute("aria-label",cn(i));b.title=cn(i);b.style.backgroundColor=c[2];b.style.backgroundImage="url("+SW[i]+")";b.style.backgroundSize="100% 100%";b.tabIndex=i===st.col?0:-1;
        b.addEventListener("click",function(){st.col=i;drawSw();upd()});
        b.addEventListener("keydown",function(e){var k=e.key,d=k==="ArrowRight"||k==="ArrowDown"?1:k==="ArrowLeft"||k==="ArrowUp"?-1:0;if(!d)return;e.preventDefault();var n=(i+d+COL.length)%COL.length;st.col=n;drawSw();upd();var nb=document.querySelector('.alb-sw[aria-checked="true"]');if(nb)nb.focus()});
        box.appendChild(b)})
    })
  }
  function range(){var lo=12+3*(st.sp-5);return [lo,lo+3]}
  function total(){return SZ[st.size].p+(st.print?19:0)+(st.sp-5)*10}
  function upd(){
    var z=SZ[st.size],c=COL[st.col],cv=$("a-cover"),nm=$("a-cname"),txt=$("a-txt").value.trim();
    cv.style.backgroundColor=c[2];var tt=TT[st.col];cv.classList.toggle("tl",!!tt);if(tt){cv.style.backgroundImage="linear-gradient(100deg,rgba(0,0,0,.18) 0,rgba(0,0,0,0) 6%,rgba(255,255,255,.1) 6.6%,rgba(0,0,0,0) 9%),linear-gradient(160deg,rgba(255,255,255,.06),rgba(0,0,0,.05)),url("+tt[0]+")";cv.style.backgroundSize="auto,auto,"+Math.round(tt[1]*0.62)+"px "+Math.round(tt[2]*0.62)+"px";cv.style.backgroundPosition="0 0,0 0,center"}else{cv.style.backgroundImage="linear-gradient(160deg,rgba(255,255,255,.05),rgba(0,0,0,.04)),url("+CV[st.col]+")";cv.style.backgroundSize="auto,100% 100%";cv.style.backgroundPosition="center"}cv.style.aspectRatio=z.r;cv.style.width=z.w;var zm=$("a-zoom");if(zm){zm.style.backgroundColor=c[2];zm.style.backgroundImage="url("+SW[st.col]+")"}
    nm.textContent=st.print?(txt||L("Sanne & Mark","Sanne & Mark")):"";nm.classList.toggle("dk",lum(c[2])>0.6);
    $("a-colname").textContent=L("Gekozen: ","Selected: ")+cn(st.col);
    $("a-cap").textContent=L("Linnen album","Linen album")+" · "+z.l+" · "+cn(st.col);
    $("a-printf").hidden=!st.print;
    var r=range();
    $("a-spn").textContent=st.sp;$("a-spm").disabled=st.sp<=5;$("a-spp").disabled=st.sp>=MAXSP;
    $("a-sphint").textContent=L(st.sp+" spreads · ideaal "+r[0]+" tot "+r[1]+" foto's · extra spread €10",st.sp+" spreads · ideal "+r[0]+" to "+r[1]+" photos · extra spread €10");
    $("a-up").hidden=st.mode!=="up";$("a-we").hidden=st.mode!=="we";$("a-ref").required=st.mode==="we";
    var n=st.files.length,cnt=$("a-count");
    cnt.textContent=n?L(n+" foto's gekozen. Ideaal: "+r[0]+" tot "+r[1]+".",n+" photos chosen. Ideal: "+r[0]+" to "+r[1]+"."):"";cnt.classList.toggle("ok",n>=r[0]&&n<=r[1]);
    var ex=st.sp-5,rows=[[L("Formaat","Size"),z.l],[L("Kleur","Colour"),cn(st.col)],[L("Naam op cover","Name on cover"),st.print?(txt?"“"+txt+"”":L("Ja, tekst volgt","Yes, text to follow")):L("Geen","None")],[L("Spreads","Spreads"),st.sp+(ex?" ("+L("incl. "+ex+" extra","incl. "+ex+" extra")+")":"")],[L("Foto's","Photos"),st.mode==="we"?L("Wij kiezen","We choose"):(n?n:L("Nog geen","None yet"))]];
    $("a-sum").innerHTML=rows.map(function(x){return "<dt>"+x[0]+"</dt><dd>"+x[1]+"</dd>"}).join("");
    $("a-total").textContent=eur(total());
  }
  Array.prototype.forEach.call(f.querySelectorAll('input[name="a-size"]'),function(i){i.addEventListener("change",function(){st.size=i.value;upd()})});
  Array.prototype.forEach.call(f.querySelectorAll('input[name="a-mode"]'),function(i){i.addEventListener("change",function(){st.mode=i.value;$("a-photo-err").hidden=true;upd()})});
  $("a-print").addEventListener("change",function(){st.print=this.checked;upd()});
  $("a-txt").addEventListener("input",upd);
  $("a-spm").addEventListener("click",function(){if(st.sp>5){st.sp--;upd()}});
  $("a-spp").addEventListener("click",function(){if(st.sp<MAXSP){st.sp++;upd()}});
  var fl=$("a-files");
  function drawFiles(){
    fl.innerHTML="";
    st.files.forEach(function(o,i){var li=document.createElement("li"),im=document.createElement("img"),sp=document.createElement("span"),b=document.createElement("button");
      im.alt="";im.src=o.url;sp.textContent=o.f.name;b.type="button";b.textContent="×";b.setAttribute("aria-label",L("Verwijder ","Remove ")+o.f.name);
      b.addEventListener("click",function(){URL.revokeObjectURL(o.url);st.files.splice(i,1);drawFiles();upd()});
      li.appendChild(im);li.appendChild(sp);li.appendChild(b);fl.appendChild(li)});
  }
  $("a-file").addEventListener("change",function(){
    Array.prototype.forEach.call(this.files,function(x){if(st.files.length>=MAXF)return;if(!/^image\//.test(x.type)&&!/\.(jpe?g|png|webp|heic|heif)$/i.test(x.name))return;if(st.files.some(function(o){return o.f.name===x.name&&o.f.size===x.size}))return;st.files.push({f:x,url:URL.createObjectURL(x)})});
    this.value="";$("a-photo-err").hidden=true;drawFiles();upd();
  });
  function chk(){
    var ok=true;Array.prototype.forEach.call(f.querySelectorAll("[required]"),function(el){var fd=el.closest(".field"),g=el.value.trim()!==""&&(el.type!=="email"||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));fd.classList.toggle("invalid",!g);if(!g&&ok){el.focus();ok=false}});
    if(ok&&st.mode==="up"&&!st.files.length){$("a-photo-err").hidden=false;$("a-file").focus();ok=false}
    return ok;
  }
  function prep(file,idx){return new Promise(function(res){var u=URL.createObjectURL(file),im=new Image();
    im.onload=function(){var m=Math.max(im.naturalWidth,im.naturalHeight),k=Math.min(1,2400/m),c=document.createElement("canvas");c.width=Math.max(1,Math.round(im.naturalWidth*k));c.height=Math.max(1,Math.round(im.naturalHeight*k));c.getContext("2d").drawImage(im,0,0,c.width,c.height);
      c.toBlob(function(b){URL.revokeObjectURL(u);if(!b){res(null);return}var r=new FileReader();r.onload=function(){var s=String(r.result||"");res({filename:(idx<9?"0":"")+(idx+1)+"-"+file.name.replace(/\.[^.]+$/,"").replace(/[^\w.\-]+/g,"_").slice(0,60)+".jpg",content:s.slice(s.indexOf(",")+1)})};r.onerror=function(){res(null)};r.readAsDataURL(b)},"image/jpeg",.86)};
    im.onerror=function(){URL.revokeObjectURL(u);res(null)};im.src=u})}
  function prepAll(btn,txt){var out=[],skipped=[],size=0,LIM=30*1024*1024,i=0;
    return new Promise(function(res){(function next(){if(i>=st.files.length){res({att:out,skipped:skipped});return}
      var o=st.files[i];btn.textContent=L("Foto's voorbereiden ","Preparing photos ")+(i+1)+"/"+st.files.length;
      prep(o.f,i).then(function(a){if(a&&size+a.content.length<=LIM){out.push(a);size+=a.content.length}else skipped.push(o.f.name);i++;next()})})()})}
  f.addEventListener("submit",function(e){
    e.preventDefault();if(!chk())return;
    var v=function(i){return $(i).value.trim()},z=SZ[st.size],txt=v("a-txt"),btn=$("a-submit"),bt=btn.textContent,r=range();
    function mk(att,skipped,sent){
      var photos=st.mode==="we"?"Wij kiezen de foto's. Shoot: "+v("a-ref")+(v("a-wish")?"\nWensen: "+v("a-wish"):""):(st.files.length+" foto's gekozen"+(sent?" ("+att.length+" als bijlage meegestuurd, verkleind"+(skipped.length?"; NIET meegestuurd: "+skipped.join(", ")+" - klant stuurt deze via WhatsApp of mail":"")+")":" - klant stuurt de foto's via WhatsApp of mail")+" (ideaal "+r[0]+" tot "+r[1]+")");
      var lines=["Nieuwe albumaanvraag via photostudio62.nl","","Album: linnen, "+z.l,"Kleur: "+COL[st.col][0],"Naam op cover: "+(st.print?(txt?"ja, \""+txt+"\" (+€19)":"ja (+€19), tekst volgt"):"nee"),"Spreads: "+st.sp+(st.sp>5?" ("+(st.sp-5)+" extra x €10)":" (inbegrepen)"),"Totaal: "+eur(total())+" (incl. btw)","","Foto's: "+photos,"","Naam: "+v("a-name"),"E-mail: "+v("a-mail"),"Telefoon: "+(v("a-tel")||"-"),"","Opmerkingen:",v("a-msg")||"-"];
      return lines.join("\n")}
    var subj="Albumaanvraag linnen "+z.l+" - "+v("a-name");
    function fb(att,sk){var body=mk(att||[],sk||[],false);btn.disabled=false;btn.textContent=bt;f.hidden=true;var d=$("a-done");d.classList.add("show");$("a-mail-link").href="mailto:info@photostudio62.nl?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body);try{window.location.href=$("a-mail-link").href}catch(err){}d.setAttribute("tabindex","-1");d.focus();window.scrollTo(0,0)}
    if(!PS62.send){fb();return}
    btn.disabled=true;
    (st.mode==="up"?prepAll(btn):Promise.resolve({att:[],skipped:[]})).then(function(p){btn.textContent=L("Versturen…","Sending…");
      return PS62.send({type:"album",subject:subj,body:mk(p.att,p.skipped,true),replyTo:v("a-mail"),name:v("a-name"),attachments:p.att.length?p.att:null}).then(function(){f.hidden=true;var ok=$("a-ok");ok.classList.add("show");var sk=$("a-ok-skip");if(p.skipped.length){sk.hidden=false;sk.firstChild.textContent=L("Een deel van je foto's kon niet automatisch mee. Stuur deze even via WhatsApp of mail naar info@photostudio62.nl.","Some of your photos could not be sent automatically. Please send them via WhatsApp or email to info@photostudio62.nl.")}ok.setAttribute("tabindex","-1");ok.focus();window.scrollTo(0,0)})}).catch(function(){fb()});
  });
  drawSw();upd();PS62.hooks.push(function(){drawSw();upd()});
})();


/* algemeen contactformulier */
(function(){
  var f=document.getElementById("cn-form");if(!f)return;
  var $=function(i){return document.getElementById(i)};
  function chk(){var ok=true;Array.prototype.forEach.call(f.querySelectorAll("[required]"),function(el){var fd=el.closest(".field"),g=el.value.trim()!==""&&(el.type!=="email"||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));fd.classList.toggle("invalid",!g);if(!g&&ok){el.focus();ok=false}});return ok}
  f.addEventListener("submit",function(e){
    e.preventDefault();if(!chk())return;
    var v=function(i){return $(i).value.trim()},btn=$("cn-submit"),bt=btn.textContent,subj=$("cn-subj").value;
    var body=["Nieuw bericht via het contactformulier op photostudio62.nl","","Onderwerp: "+subj,"","Naam: "+v("cn-name"),"Bedrijf: "+(v("cn-co")||"-"),"E-mail: "+v("cn-mail"),"Telefoon: "+(v("cn-tel")||"-"),"","Bericht:",v("cn-msg")].join("\n");
    var title="Contact: "+subj+" - "+v("cn-name");
    function fb(){btn.disabled=false;btn.textContent=bt;f.hidden=true;var d=$("cn-done"),a=$("cn-mail-link");a.href="mailto:info@photostudio62.nl?subject="+encodeURIComponent(title)+"&body="+encodeURIComponent(body);d.classList.add("show");try{window.location.href=a.href}catch(err){}d.setAttribute("tabindex","-1");d.focus();window.scrollTo(0,0)}
    if(!PS62.send){fb();return}
    btn.disabled=true;btn.textContent=L("Versturen…","Sending…");
    PS62.send({type:"contact",subject:title,body:body,replyTo:v("cn-mail"),name:v("cn-name")}).then(function(){f.hidden=true;var ok=$("cn-ok");ok.classList.add("show");ok.setAttribute("tabindex","-1");ok.focus();window.scrollTo(0,0)}).catch(fb);
  });
})();


/* automatisch versturen naar de studio */
PS62.send=function(o){return new Promise(function(res,rej){var t=setTimeout(function(){rej(new Error("timeout"))},25000);
  fetch("/api/form",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({type:o.type||"",subject:o.subject,body:o.body,replyTo:o.replyTo||"",name:o.name||"",lang:PS62.lang,website:"",attachment:o.attachment||null,attachments:o.attachments||null})}).then(function(r){return r.json().then(function(j){clearTimeout(t);if(!r.ok||!j.ok)throw new Error("x");res(j)})}).catch(function(e){clearTimeout(t);rej(e)})})};
PS62.readFile=function(f,max){return new Promise(function(res){if(!f||f.size>max){res(null);return}var r=new FileReader();r.onload=function(){var s=String(r.result||"");res({filename:f.name,content:s.slice(s.indexOf(",")+1)})};r.onerror=function(){res(null)};r.readAsDataURL(f)})};

/* bedankpagina */
(function(){
  function fill(){var b=document.getElementById("b-fallback");if(!b)return;var r=PS62.lastReq;b.hidden=!r;if(!r)return;document.getElementById("b-mail").href=r.mail;document.getElementById("b-copy-text").value=r.body}
  try{if(sessionStorage.getItem("ps62sent")){sessionStorage.removeItem("ps62sent");var ok_=document.getElementById("b-ok");if(ok_)ok_.hidden=false}}catch(e){}try{var q_=sessionStorage.getItem("ps62req");if(q_){PS62.lastReq=JSON.parse(q_);sessionStorage.removeItem("ps62req");setTimeout(function(){try{location.href=PS62.lastReq.mail}catch(e){}},500)}}catch(e){}window.addEventListener("hashchange",fill);fill();
  document.addEventListener("click",function(e){if(e.target.id!=="b-copy")return;var t=document.getElementById("b-copy-text"),btn=e.target;(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).then(function(){btn.textContent=L("Gekopieerd","Copied")},function(){t.hidden=false;t.select();btn.textContent=L("Selecteer en kopieer de tekst","Select and copy the text")})});
})();

/* cadeaukaart */
(function(){
  var f=document.getElementById("gift");if(!f)return;
  var EM="info@photostudio62.nl",done=document.getElementById("g-done");
  function v(id){var e=document.getElementById(id);return e?e.value.trim():""}
  function amt(){var r=f.querySelector("input[name=gift-amount]:checked");return r?r.value:""}
  function fld(el){while(el&&!(el.classList&&el.classList.contains("field")))el=el.parentNode;return el}
  f.addEventListener("submit",function(e){
    e.preventDefault();var ok=true,first=null;
    var ag=document.getElementById("g-amount-field");var good=!!amt();ag.classList.toggle("invalid",!good);if(!good){ok=false;first=first||ag.querySelector("input")}
    ["g-name","g-mail","g-tel"].forEach(function(id){var el=document.getElementById(id),val=el.value.trim();var g=val!==""&&(el.type!=="email"||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(val));fld(el).classList.toggle("invalid",!g);if(!g){ok=false;first=first||el}});
    if(!ok){first&&first.focus();return}
    var lines=["Nieuwe aanvraag cadeaukaart via photostudio62.nl","","Let op: dit is een aanvraag. Wij nemen binnen 24 uur via WhatsApp contact met je op om alles door te nemen.","","Bedrag: €"+amt(),"Voor wie: "+(v("g-for")||"-"),"Persoonlijke boodschap: "+(v("g-msg")||"-"),"","Naam: "+v("g-name"),"E-mail: "+v("g-mail"),"Telefoon (WhatsApp): "+v("g-tel")];
    var body=lines.join("\n"),subj="Aanvraag cadeaukaart €"+amt()+" - "+v("g-name");
    var mail="mailto:"+EM+"?cc="+encodeURIComponent(v("g-mail"))+"&subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body);
    var gsb=f.querySelector("button[type=submit]"),gsbt=gsb?gsb.textContent:"";if(gsb){gsb.disabled=true;gsb.textContent=L("Versturen\u2026","Sending\u2026")}
    PS62.send({type:"cadeaukaart",subject:subj,body:body,replyTo:v("g-mail"),name:v("g-name")}).then(function(){f.hidden=true;var gok=document.getElementById("g-ok");gok.classList.add("show");gok.setAttribute("tabindex","-1");gok.focus();window.scrollTo(0,0)}).catch(function(){if(gsb){gsb.disabled=false;gsb.textContent=gsbt}document.getElementById("g-mail-link").href=mail;document.getElementById("g-copy-text").value=body;f.hidden=true;done.classList.add("show");done.setAttribute("tabindex","-1");done.focus();window.scrollTo(0,0);setTimeout(function(){try{window.location.href=mail}catch(err){}},150)});
  });
  f.addEventListener("input",function(e){var el=fld(e.target);el&&el.classList.remove("invalid")});
  f.addEventListener("change",function(e){var el=fld(e.target);el&&el.classList.remove("invalid")});
  var cb=document.getElementById("g-copy");
  if(cb)cb.addEventListener("click",function(){var t=document.getElementById("g-copy-text");(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).then(function(){cb.textContent=L("Gekopieerd","Copied")},function(){t.hidden=false;t.select();cb.textContent=L("Selecteer en kopieer de tekst","Select and copy the text")})});
  window.addEventListener("hashchange",function(){if(false){f.hidden=false;done.classList.remove("show");f.reset()}});
})();

/* cinematische hero: iris + flits + diavoorstelling */
(function(){
  var c=document.querySelector(".cine");if(!c)return;
  var slides=[].slice.call(c.querySelectorAll(".cine-slide")),tabs=[].slice.call(c.querySelectorAll(".cine-nav .tab")),pp=c.querySelector(".pp");
  var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=0,t=null,DUR=6000,paused=reduce;
  c.style.setProperty("--dur",DUR/1000+"s");
  function show(n){i=(n+slides.length)%slides.length;slides.forEach(function(s,k){s.classList.toggle("on",k===i)});tabs.forEach(function(b,k){b.classList.remove("on");if(k===i){void b.offsetWidth;b.classList.add("on")}});schedule()}
  function schedule(){clearTimeout(t);if(!paused)t=setTimeout(function(){show(i+1)},DUR)}
  tabs.forEach(function(b,k){b.addEventListener("click",function(){show(k)})});
  pp.addEventListener("click",function(){paused=!paused;c.classList.toggle("paused",paused);pp.setAttribute("aria-pressed",paused);pp.setAttribute("aria-label",L(paused?"Diavoorstelling afspelen":"Diavoorstelling pauzeren",paused?"Play slideshow":"Pause slideshow"));pp.innerHTML=paused?'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M8 5.5v13l10-6.5z"/></svg>':'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M9 6v12M15 6v12"/></svg>';if(paused)clearTimeout(t);else schedule()});
  c.classList.toggle("paused",paused);
  PS62.hooks.push(function(){pp.setAttribute("aria-label",L(paused?"Diavoorstelling afspelen":"Diavoorstelling pauzeren",paused?"Play slideshow":"Pause slideshow"))});
  document.addEventListener("visibilitychange",function(){if(document.hidden)clearTimeout(t);else schedule()});
  requestAnimationFrame(function(){setTimeout(function(){c.classList.add("open");setTimeout(schedule,1800)},150)});
})();


/* scrollvoortgang */
(function(){
  var bar=document.querySelector(".scrollbar");if(!bar)return;
  var fill=bar.firstElementChild,tick=false;
  function upd(){tick=false;var max=document.documentElement.scrollHeight-window.innerHeight;var p=max>0?Math.min(1,Math.max(0,window.scrollY/max)):0;fill.style.transform="scaleX("+p+")";bar.setAttribute("aria-valuenow",Math.round(p*100))}
  function req(){if(!tick){tick=true;requestAnimationFrame(upd)}}
  window.addEventListener("scroll",req,{passive:true});window.addEventListener("resize",req);window.addEventListener("load",req);upd();
})();

/* studiohuur-calculator */
(function(){
  var r=document.getElementById("h-uren");if(!r)return;
  function tot(h){return 195+(h-1)*(h>=4?75:95)}
  function upd(){
    var h=+r.value,t=tot(h),per=h>=4?75:95,x=h-1;
    document.getElementById("h-out").textContent=h+L(" uur",h===1?" hour":" hours");
    document.getElementById("h-total").textContent="€"+t;
    document.getElementById("h-sum").textContent=L(h===1?"Eerste uur: €195.":"Eerste uur €195 plus "+x+" extra "+(x===1?"uur":"uren")+" van €"+per+".",h===1?"First hour: €195.":"First hour €195 plus "+x+" extra "+(x===1?"hour":"hours")+" at €"+per+".")+" "+L("Gemiddeld €"+Math.round(t/h)+" per uur, exclusief fotograaf.","Average €"+Math.round(t/h)+" per hour, excluding photographer.");
    var lk=document.getElementById("h-link"),q="contact?shoot=studiohuur&uren="+h;lk.href=R(q);lk.setAttribute("data-r",q);
    r.setAttribute("aria-valuetext",h+L(" uur",h===1?" hour":" hours")+", €"+t);
  }
  r.addEventListener("input",upd);upd();PS62.hooks.push(upd);
})();

/* pop-up: geheim + tips per pagina, en WhatsApp-links */
(function(){
  var KL=[
    {n:"Nathalie",t:["familieshoot","family shoot"],img:"/img/familie-verjaardag.jpg",to:"galerij/g-families"},
    {n:"Pinar",t:["cakesmash","cakesmash"],img:"/img/cakesmash-een.jpg",to:"galerij/g-cakesmash"},
    {n:"Korte",t:["zwangerschapsshoot","pregnancy shoot"],img:"/img/zwangerschap-studio.jpg",to:"galerij/g-zwangerschap"},
    {n:"Seyma",t:["cakesmash","cakesmash"],img:"/img/cakesmash-zonnebloem.jpg",to:"galerij/g-cakesmash"},
    {n:"Yeser",t:["familieshoot","family shoot"],img:"/img/familie-groot.jpg",to:"galerij/g-families"},
    {n:"Nese",t:["kidsshoot","kids shoot"],img:"/img/kids-aslan.jpg",to:"galerij/g-kids"}
  ];
  var PREF={"zwangerschap":[2],"cake-smash":[1,3],"kids-shoot":[5],"families":[0,4]};
  var TIPS={
   "foto-bestellen":[["Gebruik de originele foto.", "Een foto uit WhatsApp of van social media is te klein. Kies het originele bestand.", "Use the original photo.", "A photo from WhatsApp or social media is too small. Choose the original file."], ["Kies eerst het formaat op schaal.", "Op de pagina wanddecoratie zie je hoe groot het boven je bank hangt.", "Choose the size to scale first.", "On the wall art page you see how big it hangs above your sofa."], ["Meer foto's? Dien meerdere bestellingen in.", "Per bestelling upload je één foto.", "More photos? Submit several orders.", "Per order you upload one photo."]],
   "algemene-voorwaarden":[["Lees eerst de samenvatting bovenaan.", "Daar staan de belangrijkste afspraken op een rij.", "Read the summary at the top first.", "The most important agreements are listed there."], ["Annuleren kan kosteloos tot 72 uur vooraf.", "Dan verzetten we in overleg naar een andere datum.", "Cancelling is free up to 72 hours in advance.", "Then we reschedule to another date in consultation."], ["Geef allergieën vooraf door.", "Vooral bij een cakesmash is dat belangrijk.", "Report allergies in advance.", "This is especially important for a cakesmash."]],
   "new-life":[["Boek met je uitgerekende datum.","Dan houden wij ruimte voor je vrij; na de geboorte plannen we de shoot definitief in.","Book with your due date.","Then we keep space free for you; after the birth we schedule the shoot for good."],["Stuur een berichtje na de bevalling.","Bijvoorbeeld via WhatsApp, dan plannen we een moment dat past.","Send a message after the birth.","For example via WhatsApp, and we will plan a moment that suits."],["Neem een voeding en reservekleding mee.","We stemmen het tempo af op je baby.","Bring a feed and spare clothes.","We adjust the pace to your baby."]],
   home:[["Boek op tijd.","Weekenden zijn snel vol, vraag je datum ruim van tevoren aan.","Book in time.","Weekends fill up fast, so request your date well in advance."],["Twijfel je?","Doe de shoot-finder: in drie vragen weet je welk pakket bij je past.","Not sure?","Try the shoot finder: three questions and you know which package suits you."],["Een aanbetaling houdt je datum vast.","Daarna ontvang je persoonlijk kledingadvies.","A deposit secures your date.","After that you receive personal clothing advice."]],
   zwangerschap:[["Leen gratis kleding uit onze client closet.", "Neem ook zelf iets mee, dan kies je samen wat het mooist is.", "Borrow clothes for free from our client closet.", "Also bring something yourself, and together you choose what looks best."],["Plan tussen week 28 en 32.","Dan is je buik mooi rond en voel je je nog fit.","Plan between weeks 28 and 32.","Your bump is nicely round and you still feel fit."],["Studio of op locatie?","In de studio is het warm en droog, op locatie krijg je meer sfeer, bijvoorbeeld in de duinen.","Studio or on location?","The studio is warm and dry; on location, for example in the dunes, you get more atmosphere."],["Boek ruim van tevoren.","Je foto's zijn circa 3 weken na de shoot klaar.","Book well in advance.","Your photos are ready about 3 weeks after the shoot."]],
   "cake-smash":[["Geef allergieën altijd aan.", "Wij regelen ook lactosevrije taarten en houden rekening met andere allergieën.", "Always mention allergies.", "We also arrange lactose-free cakes and take other allergies into account."],["Gebruik onze gratis client closet.", "Kleding voor jongens en meisjes van 1 jaar. Neem ook zelf iets mee.", "Use our free client closet.", "Clothes for boys and girls aged 1. Also bring something yourself."],["Plan 3 weken vóór de verjaardag.","Dan staan je foto's klaar op de grote dag.","Plan 3 weeks before the birthday.","Then your photos are ready on the big day."],["Plan na een slaapje.","Een uitgeruste baby werkt het best mee.","Plan after a nap.","A well-rested baby cooperates best."],["Neem reservekleding mee.","Handig als je een badsessie kiest.","Bring spare clothes.","Handy if you choose a bath session."]],
   "kids-shoot":[["Wij nemen de tijd.", "Een shoot duurt meestal ongeveer 60 minuten, maar we zijn pas klaar als we genoeg leuke foto's hebben.", "We take our time.", "A shoot usually takes about 60 minutes, but we are only done when we have enough great photos."],["Laat je kind wennen.","We beginnen rustig, verlegen kinderen zijn vaak snel los.","Let your child get used to it.","We start calmly; shy children often loosen up quickly."],["Kies comfortabele kleding.","Kinderen die zich fijn voelen, poseren vanzelf.","Choose comfortable clothing.","Children who feel good pose naturally."],["Neem een knuffel of snack mee.","Een bekend houvast helpt bij de allerkleinsten.","Bring a cuddly toy or snack.","Something familiar helps the smallest ones."]],
   families:[["Wij nemen de tijd.", "Een shoot duurt meestal ongeveer 60 minuten, maar we kijken niet op de klok.", "We take our time.", "A shoot usually takes about 60 minutes, but we do not watch the clock."],["Kies samen een kleurenpalet.","Twee tot vier kleuren die bij elkaar passen, niet precies hetzelfde.","Choose a colour palette together.","Two to four colours that go together, not exactly the same."],["Alle generaties zijn welkom.","Geen toeslag per gezinslid, dus neem gerust opa en oma mee.","All generations are welcome.","No surcharge per family member, so feel free to bring grandparents."],["Plan vroeg.","Weekenden en vakanties zijn snel vol.","Plan early.","Weekends and holidays fill up fast."]],
   weddings:[["Vraag een offerte op maat.","Na een kort kennismakingsgesprek weet je precies waar je aan toe bent.","Ask for a tailor-made quote.","After a short first meeting you know exactly where you stand."],["Bespreek je draaiboek.","Zo weten we wanneer de belangrijkste momenten zijn.","Discuss your schedule.","That way we know when the key moments are."],["Boek je fotograaf op tijd.","Populaire data zijn vaak ruim van tevoren gevuld.","Book your photographer in time.","Popular dates often fill up well in advance."]],
   zakelijk:[["Ook hulp met je social media?", "Via Kijk62 helpen we bedrijven met foto- en videocontent tot en met het totale beheer.", "Help with your social media too?", "Through Kijk62 we help businesses with photo and video content up to complete management."],["Vertel waarvoor je de foto's gebruikt.","LinkedIn, website of print: dat bepaalt de stijl.","Tell us what the photos are for.","LinkedIn, website or print: that determines the style."],["Kies kleding die bij je werk past.","Effen kleuren werken het best.","Choose clothing that suits your work.","Plain colours work best."],["Met een team? Plan alles op één dag.","Dat scheelt tijd en geeft een eenduidige uitstraling.","With a team? Plan everything on one day.","That saves time and gives a consistent look."]],
   prijzen:[["Extra foto's kosten €4.", "Kies je er veel meer, dan geven we altijd korting.", "Extra photos cost €4.", "If you choose many more, we always give a discount."],["Vergelijk studio en op locatie.","Bij zwangerschap, kids en familie kies je uit twee pakketten.","Compare studio and on location.","For pregnancy, kids and family you choose from two packages."],["Eén vaste prijs.","Geen toeslag per gezinslid en geen verrassingen achteraf.","One fixed price.","No surcharge per family member and no surprises afterwards."],["Twijfel je?","Doe de shoot-finder, dan weet je in drie vragen welk pakket past.","Not sure?","Try the shoot finder and know in three questions which package fits."]],
   "studio-huren":[["Boek genoeg uren.","Reken op opbouw en afbouw, vanaf 4 uur betaal je €75 per extra uur.","Book enough hours.","Allow for set-up and breakdown; from 4 hours you pay €75 per extra hour."],["Maak een shotlist.","Zo gebruik je je uren om te fotograferen.","Make a shot list.","That way you use your hours to photograph."],["Boek vroeg.","Populaire dagdelen zijn snel gevuld.","Book early.","Popular time slots fill up fast."]],
   galerij:[["Klik op een foto.","Dan bekijk je hem groot, en met de pijltjes blader je door.","Click on a photo.","You see it full size, and the arrows let you browse."],["Kies een categorie.","Elke soort shoot heeft een eigen tab.","Choose a category.","Each type of shoot has its own tab."],["Lees de Hall of Fame.","Daar vertellen klanten in hun eigen woorden hoe het was.","Read the Hall of Fame.","There clients tell in their own words how it was."]],
   nabestellingen:[["Een eigen formaat nodig?", "Kies Eigen formaat, vul je maten in en je ziet direct hoe het eruit komt. De prijs hoor je van ons.", "Need a custom size?", "Choose Custom size, enter your measurements and see straight away how it looks. We will tell you the price."],["Probeer het formaat eerst.","Zie direct hoe groot je foto boven de bank hangt.","Try the size first.","See straight away how big your photo looks above the sofa."],["Canvas is warm, plexiglas heeft diepte.","Een poster is voordelig en makkelijk te wisselen.","Canvas is warm, acrylic has depth.","A poster is affordable and easy to change."],["Kies een foto met rust en ruimte.","Te veel detail aan de randen komt minder mooi uit.","Choose a photo with calm and space.","Too much detail at the edges looks less good."]],
   "over-ons":[["Maak kennis voor je boekt.","Bel, mail of stuur een WhatsApp met je vraag.","Get to know us before you book.","Call, email or send a WhatsApp with your question."],["Wij nemen de tijd.","Een huilbui of dutje tussendoor hoort erbij.","We take our time.","A crying fit or a nap in between is part of it."],["Kom je terug?","Veel gezinnen komen elk jaar voor een nieuwe foto.","Coming back?","Many families return every year for a new photo."]],
   faq:[["Gebruik de zoekbalk.","Typ een woord als aanbetaling of kleding.","Use the search bar.","Type a word like deposit or clothing."],["Niet gevonden?","Stuur een WhatsApp of bel 085 800 6262.","Not found?","Send a WhatsApp or call 085 800 6262."],["Lees ook de kennisbank.","Daar staan uitgebreide artikelen met tips.","Also read the knowledge base.","It has in-depth articles with tips."]],
   contact:[["Geef een voorkeursdatum door.","Dan kijken we direct naar de beschikbaarheid.","Give a preferred date.","Then we check availability right away."],["Liever snel antwoord?","Stuur een WhatsApp, dan reageren we zo snel mogelijk.","Want a quick answer?","Send a WhatsApp and we will reply as soon as possible."],["Een aanbetaling houdt je datum vast.","Daarna krijg je persoonlijk kledingadvies.","A deposit secures your date.","After that you get personal clothing advice."]],
   kb:[["Gebruik de zoekbalk.","Zoek op een woord als kleding of prijs.","Use the search bar.","Search for a word like clothing or price."],["Kijk in de inhoudsopgave.","Spring direct naar het onderdeel dat je zoekt.","Check the table of contents.","Jump straight to the part you are looking for."],["Vragen? Stuur een WhatsApp.","We denken graag met je mee.","Questions? Send a WhatsApp.","We are happy to help you think it through."]]
  };
  var EXP={"home": ["Uit 10+ jaar ervaring: kleine kinderen hebben tijd nodig.", "We plannen rust in, dan lukt het bijna altijd.", "From 10+ years of experience: small children need time.", "We plan in calm, and then it almost always works."], "zwangerschap": ["Uit 10+ jaar ervaring: kleding die rekt staat het mooist.", "Kies een jurk of top die je buik laat zien, zonder dat het knelt.", "From 10+ years of experience: stretchy clothing looks best.", "Choose a dress or top that shows your bump without feeling tight."], "cake-smash": ["Uit 10+ jaar ervaring: kies een rustig moment.", "Na een slaapje en een voeding is de baby het vrolijkst.", "From 10+ years of experience: choose a calm moment.", "After a nap and a feed the baby is at its happiest."], "kids-shoot": ["Uit 10+ jaar ervaring: laat je kind vooral kind zijn.", "De mooiste foto's ontstaan als er niet te veel wordt gestuurd.", "From 10+ years of experience: let your child just be a child.", "The most beautiful photos happen when there is not too much direction."], "families": ["Uit 10+ jaar ervaring: begin met de kleinsten.", "Zij zijn het eerst moe; de grote groepsfoto doen we daarna.", "From 10+ years of experience: start with the youngest.", "They tire first; we do the big group photo afterwards."], "weddings": ["Uit 10+ jaar ervaring: plan ruim tijd voor de portretten.", "Een halfuur extra voorkomt haast op de mooiste momenten.", "From 10+ years of experience: plan plenty of time for portraits.", "An extra half hour prevents rushing at the best moments."], "new-life": ["Uit 10+ jaar ervaring: een baby bepaalt het tempo.", "Wij plannen voeding en rust in en gaan mee met je baby.", "From 10+ years of experience: the baby sets the pace.", "We plan in feeds and rest and go along with your baby."], "over-ons": ["Sinds 2016 doen we dit.", "Ruim 10 jaar ervaring: Arda achter de camera, Sinem voor alles eromheen.", "We have been doing this since 2016.", "Over 10 years of experience: Arda behind the camera, Sinem for everything around it."], "kb": ["Uit 10+ jaar ervaring: deze artikelen komen uit de praktijk.", "Alles wat we hier schrijven, horen we terug in de studio.", "From 10+ years of experience: these articles come from practice.", "Everything we write here, we hear back in the studio."], "def": ["Uit 10+ jaar ervaring: kom rustig en zonder haast.", "Een ontspannen start geeft de mooiste foto's.", "From 10+ years of experience: come calmly and without rushing.", "A relaxed start gives the best photos."]};
  var k=KL[Math.floor(Math.random()*KL.length)];
  var TN={"Wees op tijd":"Be on time","Levertijd":"Delivery time","Ruim 10 jaar ervaring":"10+ years of experience","Wij kijken niet op de klok":"We do not watch the clock","Geen maximum aan settings":"No maximum number of settings","Gratis parkeren":"Free parking","Gratis verzetten":"Free rescheduling","Gratis kleding lenen":"Borrow clothes for free","Huisdier mee?":"Pet coming along?"};
  var MSGS=[
   ["client","“Hey, ik zat ook net als jij te zoeken waar ik een goede fotoshoot kon houden. Dit zijn mijn resultaten, klik hier.”","“Hey, I was searching just like you for a good place to have a photoshoot. These are my results, click here.”","Bekijk mijn resultaten","See my results",""],
   ["Wees op tijd","Wees er 15 minuten voor de start van je shoot. Dan kom je rustig aan en kun je omkleden. Met onze calculator zie je precies hoe laat je moet vertrekken.","Be here 15 minutes before your shoot starts. Then you arrive calmly and can change. Our calculator shows exactly when to leave.","Bereken je vertrektijd","Calculate when to leave","route"],
   ["Levertijd","Je foto's staan binnen 3 weken klaar nadat je je favorieten hebt gekozen. Boek dus ruim voor een speciale dag, zoals een verjaardag of een geboorte.","Your photos are ready within 3 weeks after you have chosen your favourites. So book well before a special day, such as a birthday or a birth.","Bekijk de veelgestelde vragen","See the frequently asked questions","faq"],
   ["Ruim 10 jaar ervaring","Sinds 2016 fotograferen Arda en Sinem baby's, gezinnen en bruidsparen. Die ervaring merk je aan de rust tijdens je shoot en aan het resultaat.","Since 2016 Arda and Sinem have photographed babies, families and wedding couples. You notice that experience in the calm during your shoot and in the result.","Maak kennis met ons","Get to know us","over-ons"],
   ["Wij kijken niet op de klok","Een shoot duurt meestal ongeveer 60 minuten, maar dat is geen limiet. Wij zijn pas klaar als we zeker weten dat we genoeg mooie foto's hebben.","A shoot usually takes about 60 minutes, but that is not a limit. We are only done when we are sure we have enough beautiful photos.","Lees hoe lang een shoot duurt","Read how long a shoot takes","kb-hoelang-duurt-een-fotoshoot"],
   ["Geen maximum aan settings","Bij ons zit je niet vast aan een maximaal aantal settings. Bij zwangerschaps- en familieshoots gebruiken we de hele studio, met meerdere achtergronden voor veel variatie.","With us you are not tied to a maximum number of settings. For pregnancy and family shoots we use the whole studio, with multiple backgrounds for plenty of variety.","Bekijk de galerij","See the gallery","galerij"],
   ["Gratis parkeren","Je parkeert gratis, vlak voor de deur van onze studio in Poeldijk. Handig met een kinderwagen, tassen of een taart.","You park for free, right at the door of our studio in Poeldijk. Handy with a pram, bags or a cake.","Lees meer over parkeren","Read more about parking","kb-gratis-parkeren-fotostudio-poeldijk"],
   ["Gratis verzetten","Verzetten of annuleren kan gratis tot 72 uur van tevoren. Je datum staat vast na een aanbetaling van €60.","Rescheduling or cancelling is free up to 72 hours in advance. Your date is confirmed after a deposit of €60.","Bekijk de voorwaarden","See the terms","algemene-voorwaarden"],
   ["Gratis kleding lenen","Uit onze client closet leen je gratis kleding voor je shoot. Neem ook zelf iets mee, dan kies je samen wat het mooist is.","From our client closet you borrow clothes for your shoot for free. Also bring something yourself, and together you choose what looks best.","Zo werkt de client closet","How the client closet works","kb-client-closet"],
   ["Huisdier mee?","Een hond of kat mag mee naar je shoot, in overleg. Geef het altijd van tevoren aan, dan stemmen wij de planning en de opzet erop af.","A dog or cat may come along to your shoot, in consultation. Always tell us beforehand, and we will adapt the planning and set-up.","Lees alles over huisdieren","Read all about pets","kb-huisdieren-fotoshoot"]
  ];
  var ti=Math.floor(Math.random()*MSGS.length);
  function tipHtml(){
    var m=MSGS[ti],who=m[0]==="client"
      ?'<div class="secret-who"><span class="secret-photo"><img src="'+k.img+'" alt="" onerror="this.remove()"></span><span><strong>'+k.n+'</strong><small>'+L("Klant, "+k.t[0],"Client, "+k.t[1])+'</small></span></div><p class="secret-msg">'+L(m[1],m[2])+'</p>'
      :'<div class="secret-who"><span class="secret-photo"><img width="512" height="512" src="/img/logo.png?v=db8aa185" alt="" onerror="this.remove()"></span><span><strong>'+L(m[0],TN[m[0]]||m[0])+'</strong><small>'+L("Tip van Photostudio62","Tip from Photostudio62")+'</small></span></div><p class="secret-msg">'+L(m[1],m[2])+'</p>';
    return who+'<div class="secret-actions"><a class="btn btn--sm secret-go" data-r="'+(m[5]||k.to)+'" href="'+R(m[5]||k.to)+'">'+L(m[3],m[4])+'</a><button type="button" class="btn btn--ghost btn--sm secret-next">'+L("Nog een tip","Another tip")+' ('+(ti+1)+'/'+MSGS.length+')</button></div>';
  }
  var pill=document.createElement("button");pill.type="button";pill.className="secret-pill";pill.setAttribute("aria-haspopup","dialog");
  var box=document.createElement("div");box.className="secret";box.setAttribute("role","dialog");box.hidden=true;
  function slug(){var r=PS62.route;return r?r.slug:"home"}
  function tipsFor(sl){return TIPS[sl]||(sl==="kennisbank"||sl.indexOf("kb-")===0?TIPS.kb:TIPS.home)}
  function expFor(sl){return EXP[sl]||(sl==="kennisbank"||sl.indexOf("kb-")===0?EXP.kb:EXP.def)}
  function pick(){ti=Math.floor(Math.random()*MSGS.length);var p=PREF[slug()];k=p?KL[p[Math.floor(Math.random()*p.length)]]:KL[Math.floor(Math.random()*KL.length)]}
  function build(){
    var tp=tipsFor(slug()),li=tp.map(function(t){return '<li><strong>'+L(t[0],t[2])+'</strong> '+L(t[1],t[3])+'</li>'}).join(""),ex=expFor(slug());li+='<li class="exp-tip"><strong>★ '+L(ex[0],ex[2])+'</strong> '+L(ex[1],ex[3])+'</li>';
    pill.innerHTML='<span class="sp-ico" aria-hidden="true">🤫</span><span>'+L("Psst… druk hier voor een geheim","Psst… press here for a secret")+'</span>';
    box.setAttribute("aria-label",L("Een tip van een klant","A tip from a client"));
    box.innerHTML='<button type="button" class="secret-x" aria-label="'+L("Sluiten","Close")+'"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button>'
     +tipHtml()
     +'<div class="secret-tips"><p class="secret-h">'+L("Tips voor deze pagina","Tips for this page")+'</p><ul>'+li+'</ul>'
     +'<a class="btn btn--ghost btn--sm" data-r="contact" href="'+R("contact")+'">'+L("Plan je shoot","Book your shoot")+'</a></div>';
  }
  pick();build();document.body.appendChild(pill);document.body.appendChild(box);
  var opened=false,last=null;
  function reveal(){if(!box.classList.contains("open"))pill.classList.add("show")}
  setTimeout(reveal,6000);
  window.addEventListener("scroll",function(){if(window.scrollY>window.innerHeight*.5)reveal()},{passive:true});
  function open(){if(opened){ti=(ti+1)%MSGS.length;build()}opened=true;last=document.activeElement;pill.classList.remove("show");box.hidden=false;void box.offsetWidth;box.classList.add("open");box.querySelector(".secret-go").focus()}
  function close(){box.classList.remove("open");setTimeout(function(){box.hidden=true},250);pill.classList.add("show");last&&last.focus&&last.focus()}
  pill.addEventListener("click",open);
  box.addEventListener("click",function(e){if(e.target.closest(".secret-next")){ti=(ti+1)%MSGS.length;build();var nx=box.querySelector(".secret-next");nx&&nx.focus();return}if(e.target.closest(".secret-x"))close();else if(e.target.closest("a"))close()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&box.classList.contains("open"))close()});
  window.addEventListener("hashchange",function(){setTimeout(function(){pick();build()},0)});
  PS62.hooks.push(build);
  /* WhatsApp-links: tekst in de gekozen taal */
  PS62.hooks.push(function(){
    var t=L("Hallo Photostudio62, ik heb een vraag of wil graag een shoot boeken.","Hello Photostudio62, I have a question or would like to book a shoot.");
    Array.prototype.forEach.call(document.querySelectorAll("a[data-wa]"),function(a){a.href="https://wa.me/31642588773?text="+encodeURIComponent(t)});
  });
})();

/* link naar algemene voorwaarden in nieuw tabblad (formulier blijft behouden) */
(function(){function up(){var u=R("algemene-voorwaarden");Array.prototype.forEach.call(document.querySelectorAll("a[data-terms]"),function(a){a.href=u})}PS62.hooks.push(up);up()})();

/* bestelformulier foto's */
(function(){
  var f=document.getElementById("order");if(!f)return;
  var PR={canvas:{label:"Canvas",sizes:{"30×20":74.95,"30×40":89.95,"60×40":99.95,"80×60":104.95,"100×70":119.95,"120×80":125.95,"150×100":165}},plexi:{label:"Plexiglas",sizes:{"30×20":78.95,"30×40":94.95,"60×40":104.95,"80×60":110.95,"100×70":125.95,"120×80":132.95}},poster:{label:"Poster",sizes:{"30×40":85.95,"80×60":99.95,"120×80":119.95}}};
  var $=function(i){return document.getElementById(i)};
  var dim="";var mat=$("o-mat"),size=$("o-size"),ori=$("o-ori"),qty=$("o-qty"),price=$("o-price"),sum=$("o-sum");
  function eur(n,nl){return "€"+(Math.round(n*100)/100).toFixed(n%1?2:0).replace(".",nl||PS62.lang!=="en"?",":".")}
  function build(keepM,keepS,keepO){
    var m=keepM||mat.value||"canvas";
    mat.innerHTML=Object.keys(PR).map(function(k){return '<option value="'+k+'">'+T(PR[k].label)+'</option>'}).join("");mat.value=m;
    var sizes=Object.keys(PR[m].sizes),s=keepS||size.value;if(s!=="custom"&&sizes.indexOf(s)<0)s=sizes[Math.min(2,sizes.length-1)];
    size.innerHTML=sizes.map(function(k){return '<option value="'+k+'">'+k+' cm ('+eur(PR[m].sizes[k])+')</option>'}).join("")+'<option value="custom">'+L("Aangepast formaat (prijs op aanvraag)","Custom size (price on request)")+'</option>';size.value=s;
    var o=keepO||ori.value||"land";
    ori.innerHTML='<option value="land">'+L("Liggend","Landscape")+'</option><option value="port">'+L("Staand","Portrait")+'</option>';ori.value=o;
    upd();
  }
  function cdim(){return ($("o-cw").value||"?")+"×"+($("o-ch").value||"?")}
  function upd(){
    var m=mat.value,s=size.value,cust=s==="custom",p=cust?0:PR[m].sizes[s],q=Math.max(1,Math.min(20,parseInt(qty.value,10)||1));
    $("o-custom").hidden=!cust;$("o-cw").required=cust;$("o-ch").required=cust;
    price.textContent=cust?L("Prijs: op aanvraag. Wij laten je de prijs weten.","Price: on request. We will tell you the price."):L("Prijs per stuk: "+eur(p,1)+" · Totaal: "+eur(p*q,1)+" (incl. btw)","Price per piece: "+eur(p)+" · Total: "+eur(p*q)+" (incl. VAT)");
    var rows=[[L("Materiaal","Material"),T(PR[m].label)],[L("Formaat","Size"),cust?cdim()+" cm":s+" cm"],[L("Richting","Orientation"),ori.value==="port"?L("Staand","Portrait"):L("Liggend","Landscape")],[L("Aantal","Quantity"),q],[L("Totaal","Total"),cust?L("Op aanvraag","On request"):eur(p*q)]];
    sum.innerHTML=rows.map(function(r){return "<dt>"+r[0]+"</dt><dd>"+r[1]+"</dd>"}).join("");
  }
  mat.addEventListener("change",function(){build(mat.value,null,ori.value)});
  size.addEventListener("change",upd);ori.addEventListener("change",upd);qty.addEventListener("input",upd);
  PS62.prefillOrder=function(qs){var m=qs.get("m");if(!PR[m])m=mat.value||"canvas";var s=qs.get("s")||"",o=qs.get("o")==="port"?"port":"land";build(m,s,o);if(s==="custom"){$("o-cw").value=qs.get("w")||"";$("o-ch").value=qs.get("h")||"";upd()}};
  build();PS62.hooks.push(function(){build(mat.value,size.value,ori.value)});
  var fi=$("o-file"),finfo=$("o-file-info");
  fi.addEventListener("change",function(){dim="";var f=fi.files[0];finfo.textContent="";if(!f)return;var u=URL.createObjectURL(f),im=new Image();
    im.onload=function(){dim=im.naturalWidth+"×"+im.naturalHeight+" px";var low=Math.max(im.naturalWidth,im.naturalHeight)<2000;finfo.textContent=L("Gekozen: ","Selected: ")+f.name+" ("+dim+")"+(low?L(". Let op: deze foto heeft een lage resolutie. Kies waar mogelijk het originele bestand.",". Note: this photo has a low resolution. Please choose the original file if possible."):"");URL.revokeObjectURL(u)};
    im.onerror=function(){finfo.textContent=L("Gekozen: ","Selected: ")+f.name;URL.revokeObjectURL(u)};im.src=u});
  function chk(){var ok=true;Array.prototype.forEach.call(f.querySelectorAll("[required]"),function(el){var fd=el.closest(".field"),g=el.value.trim()!==""&&(el.type!=="email"||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(el.value));fd.classList.toggle("invalid",!g);if(!g&&ok){el.focus();ok=false}});return ok}
  f.addEventListener("submit",function(e){
    e.preventDefault();if(!chk())return;
    var m=mat.value,s=size.value,cust=s==="custom",p=cust?0:PR[m].sizes[s],q=Math.max(1,Math.min(20,parseInt(qty.value,10)||1));
    var v=function(i){return $(i).value.trim()};var ff=fi.files[0],fileDesc=ff?ff.name+(dim?" ("+dim+")":"")+" - voeg deze foto als bijlage toe aan deze e-mail":"-";
    var lines=["Nieuwe bestelling (foto op muur) via photostudio62.nl","","Materiaal: "+PR[m].label,"Formaat: "+(cust?cdim()+" cm (aangepast formaat)":s+" cm"),"Richting: "+(ori.value==="port"?"staand":"liggend"),"Aantal: "+q,cust?"Prijs: op aanvraag (Photostudio62 laat de prijs weten)":"Prijs per stuk: "+eur(p,1)+" (incl. btw)",cust?null:"Totaal: "+eur(p*q,1),"","Foto: "+fileDesc,"","Naam: "+v("o-name"),"E-mail: "+v("o-mail"),"Telefoon: "+(v("o-tel")||"-"),"","Opmerkingen:",v("o-msg")||"-"];
    var body=lines.filter(function(x){return x!==null}).join("\n"),mail="mailto:info@photostudio62.nl?subject="+encodeURIComponent("Bestelling foto op "+PR[m].label.toLowerCase()+" - "+v("o-name"))+"&body="+encodeURIComponent(body);
    var d=$("o-done"),osb=f.querySelector("button[type=submit]"),osbt=osb?osb.textContent:"";if(osb){osb.disabled=true;osb.textContent=L("Versturen\u2026","Sending\u2026")}
    PS62.readFile(ff,10*1024*1024).then(function(att){var big=ff&&!att,sbody=body.replace(" - voeg deze foto als bijlage toe aan deze e-mail",att?" (als bijlage meegestuurd)":" (te groot om automatisch mee te sturen: de klant stuurt de foto via WhatsApp of mail)");
      return PS62.send({type:"bestelling",subject:"Bestelling foto op "+PR[m].label.toLowerCase()+" - "+v("o-name"),body:sbody,replyTo:v("o-mail"),name:v("o-name"),attachment:att}).then(function(){f.hidden=true;var ok=$("o-ok");ok.classList.add("show");var bg=$("o-ok-big");if(bg)bg.hidden=!big;ok.setAttribute("tabindex","-1");ok.focus();window.scrollTo(0,0)})}).catch(function(){if(osb){osb.disabled=false;osb.textContent=osbt}f.hidden=true;d.classList.add("show");$("o-mail-link").href=mail;$("o-copy-text").value=body;try{window.location.href=mail}catch(err){}d.setAttribute("tabindex","-1");d.focus()});
  });
  var cb=$("o-copy");cb.addEventListener("click",function(){var t=$("o-copy-text");(navigator.clipboard?navigator.clipboard.writeText(t.value):Promise.reject()).then(function(){cb.textContent=L("Gekopieerd","Copied")},function(){t.hidden=false;t.select();cb.textContent=L("Selecteer en kopieer de tekst","Select and copy the text")})});
})();

/* router + taalkeuze */
/* kennisbank + faq zoeken */
(function(){
  function $(s,c){return (c||document).querySelector(s)}
  function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
  function nz(s){return (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"")}
  function words(q){return nz(q).split(/\s+/).filter(Boolean)}
  var idx=null;
  function build(){idx=$$("[data-kbcard]").map(function(a){
    var t=$("h3",a).textContent,s=$("p",a).textContent,c=$(".kb-meta span",a).textContent;
    return{r:a.getAttribute("data-r"),t:t,c:c,h:nz(t+" "+s+" "+a.getAttribute("data-k"))}})}
  function find(q){if(!idx)build();var w=words(q);if(!w.length)return[];return idx.filter(function(x){return w.every(function(k){return x.h.indexOf(k)>-1})})}
  function onHub(){return PS62.route&&PS62.route.slug==="kennisbank"}
  function filterHub(q){
    var w=words(q),cards=$$("[data-kbcard]"),any=false;
    cards.forEach(function(a){var h=nz($("h3",a).textContent+" "+$("p",a).textContent+" "+a.getAttribute("data-k")),ok=w.every(function(k){return h.indexOf(k)>-1});a.hidden=!ok;if(ok)any=true});
    $$("[data-kbcat]").forEach(function(c){c.hidden=!$$("[data-kbcard]",c).some(function(a){return !a.hidden})});
    var n=$("#kb-none");if(n)n.hidden=any||!w.length&&true;
    if(!w.length&&n)n.hidden=true;
  }
  function filterFaq(q){
    var w=words(q),v=$('[data-slug="faq"]'),any=false;if(!v)return;
    $$("details",v).forEach(function(d){var ok=w.every(function(k){return nz(d.textContent).indexOf(k)>-1});d.hidden=!ok;if(ok)any=true;if(w.length&&ok)d.open=true});
    $$(".faq",v).forEach(function(f){var vis=$$("details",f).some(function(d){return !d.hidden}),h=f.previousElementSibling;f.hidden=!vis;if(h&&h.tagName==="H2")h.hidden=!vis});
    var n=$("#faq-none");if(n)n.hidden=any||!w.length;
  }
  function render(box,q){
    var res=$(".kbs-res",box),list=find(q);
    if(!words(q).length){res.hidden=true;res.innerHTML="";return}
    var h="";
    if(list.length)list.slice(0,6).forEach(function(x){h+='<a href="'+R(x.r)+'" data-r="'+x.r+'">'+x.t.replace(/</g,"&lt;")+'<span>'+x.c.replace(/</g,"&lt;")+'</span></a>'});
    else h='<p>'+L("Geen artikelen gevonden. Probeer een ander woord.","No articles found. Try another word.")+'</p>';
    res.innerHTML=h;res.hidden=false;
  }
  function setup(){
    $$("form[data-kbs]").forEach(function(f){
      if(f.__ok)return;f.__ok=true;var inp=$("input",f);
      inp.addEventListener("input",function(){
        if(onHub()&&f.closest('[data-slug="kennisbank"]')){filterHub(inp.value);$(".kbs-res",f).hidden=true}
        else render(f,inp.value);
      });
      f.addEventListener("submit",function(e){e.preventDefault();var q=inp.value.trim();
        if(onHub()&&f.closest('[data-slug="kennisbank"]')){filterHub(q);return}
        location.href=R("kennisbank"+(q?"?q="+encodeURIComponent(q):""))});
      f.addEventListener("keydown",function(e){if(e.key==="Escape"){$(".kbs-res",f).hidden=true}});
    });
    $$("form[data-faqs]").forEach(function(f){
      if(f.__ok)return;f.__ok=true;var inp=$("input",f);
      inp.addEventListener("input",function(){filterFaq(inp.value)});
      f.addEventListener("submit",function(e){e.preventDefault();filterFaq(inp.value)});
    });
  }
  document.addEventListener("click",function(e){
    $$(".kbs-res").forEach(function(r){if(!r.parentNode.contains(e.target))r.hidden=true;else if(e.target.closest("a"))r.hidden=true});
  });
  PS62.hooks.push(function(){idx=null;setup();
    var hub=$('[data-slug="kennisbank"] input');if(hub&&hub.value)filterHub(hub.value);
    var fq=$('[data-slug="faq"] input');if(fq&&fq.value)filterFaq(fq.value)});
  PS62.onRoute=function(r,v){
    setup();
    $$("form[data-kbs] .kbs-res").forEach(function(x){x.hidden=true});
    if(r.slug==="kennisbank"){
      var q=new URLSearchParams(r.q).get("q")||"",inp=$("input",v);
      if(inp){inp.value=q}filterHub(q);
    }
  };
  setup();
})();

(function(){
  function $(s,c){return (c||document).querySelector(s)}
  function $$(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))}
  var views={},cur=null,main=document.getElementById("main"),desc=$('meta[name="description"]');
  $$(".view").forEach(function(v){views[v.getAttribute("data-slug")]=v});
  function parse(){
    var p=location.pathname.replace(/index\.html$/,"").split("/").filter(Boolean),lang="nl";
    if(p[0]==="en"){lang="en";p.shift()}
    return{lang:lang,slug:p[0]||"home",sub:decodeURIComponent((location.hash||"").slice(1)),q:(location.search||"").slice(1)};
  }
  function meta(v){
    document.title=T(v.getAttribute("data-title"));
    if(desc)desc.setAttribute("content",T(v.getAttribute("data-desc")));
  }
  function scrollToId(v,id){
    var el=v.querySelector("#"+(window.CSS&&CSS.escape?CSS.escape(id):id));if(!el)return;
    if(el.getAttribute("role")==="tabpanel"){
      var wrap=el.closest("[data-tabs]");if(wrap&&wrap.__show)wrap.__show(id);
      var tl=wrap&&wrap.querySelector('[role="tablist"]');(tl||el).scrollIntoView({behavior:"smooth",block:"start"});
    }else el.scrollIntoView({behavior:"smooth",block:"start"});
  }
  function show(){
    var r=parse();PS62.route=r;
    if(r.lang!==PS62.lang||!PS62.ready){PS62.ready=true;PS62.apply(r.lang)}
    var v=views[r.slug]||views["404"],changed=v!==cur;
    if(changed){if(cur)cur.hidden=true;v.hidden=false;cur=v;document.documentElement.setAttribute("data-view",v.getAttribute("data-slug"));
      $$("a[data-r]").forEach(function(a){var rs=a.getAttribute("data-r").split(/[\/?]/)[0]||"home";if(a.closest(".nav,.mm-list"))a.toggleAttribute("aria-current",rs===(v.getAttribute("data-slug")==="home"?"home":v.getAttribute("data-slug")))});
      $$(".nav a[aria-current],.mm-list a[aria-current]").forEach(function(a){a.setAttribute("aria-current","page")});
      (function(){var sl=document.getElementById("cta-slot");if(!sl)return;
        if(sl.__home){var h=sl.__home;h.p.insertBefore(h.n,h.x&&h.x.parentNode===h.p?h.x:null);sl.__home=null}
        var c=null;Array.prototype.forEach.call(v.children,function(e){if(e.tagName==="SECTION"&&e.querySelector(".cta-band"))c=e});
        if(c){sl.__home={n:c,p:v,x:c.nextElementSibling};sl.appendChild(c)}})();
      meta(v);
      if(PS62.fit)PS62.fit();
      if(v.getAttribute("data-slug")==="nabestellingen"&&PS62.drawWall)PS62.drawWall();
      if(!r.sub)window.scrollTo(0,0);
    }
    meta(v);
    if(PS62.onRoute)PS62.onRoute(r,v);
    if(r.slug==="contact"&&PS62.prefill)PS62.prefill(new URLSearchParams(r.q));
    if(r.slug==="foto-bestellen"&&PS62.prefillOrder)PS62.prefillOrder(new URLSearchParams(r.q));
    if(r.sub)setTimeout(function(){scrollToId(v,r.sub)},changed?60:0);
    else if(!changed&&!r.q)window.scrollTo({top:0,behavior:"smooth"});
  }
  PS62.meta=function(){if(cur)meta(cur)};
  window.addEventListener("hashchange",show);
  document.addEventListener("click",function(e){
    var a=e.target.closest("a[data-r]");
    if(a){var h=a.getAttribute("href");if(h===location.hash||(h==="#/"&&!location.hash)){e.preventDefault();show()}}
    var l=e.target.closest("[data-lang]");
    if(l){var rr=PS62.route,rest=(rr.slug==="home"?(rr.sub?"home/"+rr.sub:""):rr.slug+(rr.sub?"/"+rr.sub:""))+(rr.q?"?"+rr.q:"");location.href=(l.getAttribute("data-lang")==="en"?"/en":"")+(rr.slug==="home"?"/":"/"+rr.slug+"/")+(rr.sub?"#"+rr.sub:"")}
    var sk=e.target.closest("a.skip");if(sk){e.preventDefault();main.focus()}
  });
  PS62.hooks.push(function(){
    $$("a[data-r]").forEach(function(a){a.setAttribute("href",R(a.getAttribute("data-r")))});
    $$("[data-lang]").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-lang")===PS62.lang)});
    if(PS62.fit)PS62.fit();
  });
  show();
})();


/* cakesmash: pakketuitleg */
(function(){
  var d=document.getElementById("pkgd-cakesmash");if(!d)return;
  var view=d.closest(".view"),cur=0,last=null,N=3;
  var tabs=[].slice.call(d.querySelectorAll("[data-pkgd-tab]")),panels=[].slice.call(d.querySelectorAll("[data-pkgd]")),ctas=[].slice.call(d.querySelectorAll("[data-pkgd-cta]")),steps=[].slice.call(d.querySelectorAll("[data-pkgd-step]"));
  function show(i){cur=Math.max(0,Math.min(N-1,i));
    tabs.forEach(function(t,k){t.setAttribute("aria-selected",k===cur);t.tabIndex=k===cur?0:-1});
    panels.forEach(function(p,k){p.hidden=k!==cur});ctas.forEach(function(c,k){c.hidden=k!==cur});
    d.setAttribute("aria-labelledby","pkgd-h"+cur);steps[0].disabled=cur===0;steps[1].disabled=cur===N-1;
    var b=d.querySelector(".pkgd-body");if(b)b.scrollTop=0}
  function open(i){last=document.activeElement;show(i);
    if(typeof d.showModal==="function"){if(!d.open)d.showModal()}else d.setAttribute("open","");
    document.documentElement.style.overflow="hidden";var t=tabs[cur];t&&t.focus()}
  function close(){if(d.open){if(typeof d.close==="function")d.close();else d.removeAttribute("open")}}
  d.addEventListener("close",function(){document.documentElement.style.overflow="";if(last&&last.focus&&document.contains(last))last.focus({preventScroll:true})});
  view.addEventListener("click",function(e){
    if(d.contains(e.target))return;
    var c=e.target.closest("[data-pkg-open]");if(!c)return;
    if(e.target.closest("a")&&!e.target.closest(".pkg-more"))return;
    e.preventDefault();open(+c.getAttribute("data-pkg-open"));
  });
  tabs.forEach(function(t,k){t.addEventListener("click",function(){show(k)});
    t.addEventListener("keydown",function(e){var dd=e.key==="ArrowRight"?1:e.key==="ArrowLeft"?-1:0;if(dd){e.preventDefault();show((cur+dd+N)%N);tabs[cur].focus()}})});
  steps.forEach(function(b){b.addEventListener("click",function(){show(cur+(+b.getAttribute("data-pkgd-step")))})});
  d.querySelector("[data-pkgd-close]").addEventListener("click",close);
  d.addEventListener("click",function(e){if(e.target===d)close();if(e.target.closest("a"))close()});
  window.addEventListener("hashchange",close);
})();
