function flash(m){document.getElementById("toast-msg").textContent=m;var t=document.getElementById("toast");t.classList.add("show");setTimeout(function(){t.classList.remove("show")},1800)}
function cp(t,l){if(!t){flash("Nothing to copy");return}navigator.clipboard.writeText(t).then(function(){flash(l||"Copied!")}).catch(function(){flash("Copy failed")})}

function rSensi(){
 var sc=D["sensi"+(dev=="phone"?"Phone":"Tablet")]||"";
 var hc=D["hud"+(dev=="phone"?"Phone":"Tablet")]||"";
 var e=document.getElementById("sensi-sec");
 var h='<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;flex-wrap:wrap;gap:.75rem"><p style="font-size:.875rem;color:var(--muted)">Import codes for CODM</p><div class="dt"><button class="db '+(dev=="phone"?"act":"")+'" data-dev="phone">Phone</button><button class="db '+(dev=="tablet"?"act":"")+'" data-dev="tablet">Tablet</button></div></div>';var ids="sensi-codes";
 h+='<div id="'+ids+'">';
 h+='<div class="cr" onclick="cp(\''+sc.replace(/'/g,"\\'")+'\',\'Sensitivity copied!\')"><div class="cl">SENSITIVITY ('+dev.toUpperCase()+')</div><div class="cv">'+(sc||'<em style="color:var(--subtle)">No code set</em>')+'</div><div class="ch"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> CLICK TO COPY</div></div>';
 h+='<div class="cr" onclick="cp(\''+hc.replace(/'/g,"\\'")+'\',\'HUD copied!\')"><div class="cl">HUD LAYOUT ('+dev.toUpperCase()+')</div><div class="cv">'+(hc||'<em style="color:var(--subtle)">No code set</em>')+'</div><div class="ch"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> CLICK TO COPY</div></div>';
 h+='</div>';
 h+='<div class="fg2" style="margin-top:1.25rem"><button class="bf" id="copy-both-btn"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy Both</button><button class="bo" id="share-btn"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share</button></div>';
 e.innerHTML=h;
 // bind events
 document.getElementById("copy-both-btn").onclick=function(){
  var s=D["sensi"+(dev=="phone"?"Phone":"Tablet")]||"";
  var hc2=D["hud"+(dev=="phone"?"Phone":"Tablet")]||"";
  cp(s+"\n"+hc2,"Both codes copied!");
 };
 document.getElementById("share-btn").onclick=function(){
  if(navigator.share)navigator.share({title:"Shxwn CODM",url:location.href}).catch(function(){});
  else cp(location.href,"Link copied!");
 };
 // device toggle
 Array.from(document.querySelectorAll("#sensi-sec .db")).forEach(function(b){
  b.onclick=function(){dev=b.getAttribute("data-dev");rSensi();}
 });
}

function rHome(){
 document.getElementById("tagline").textContent=D.tagline;
 document.getElementById("stat-cards").innerHTML='<div class="sc"><div class="n">'+D.loadouts.length+'</div><div class="l">LOADOUTS</div></div><div class="sc"><div class="n">'+D.loadouts.filter(function(l){return l.favorite}).length+'</div><div class="l">FAVORITES</div></div><div class="sc"><div class="n">2</div><div class="l">SETTINGS</div></div>';
 // Gift
 var g=document.getElementById("gift-sec");
 g.innerHTML='<p style="font-size:.875rem;margin-bottom:1rem;color:var(--muted)">Send a gift via PayPal or GCash</p><div class="fg2">';
 g.innerHTML+=(D.paypal?'<button class="bo">PAYPAL</button>':'<button class="bo" disabled>PAYPAL</button>');
 g.innerHTML+=(D.gcash?'<button class="bo">GCASH</button>':'<button class="bo" disabled>GCASH</button>');
 g.innerHTML+='</div>';
 var btns=g.querySelectorAll(".bo:not([disabled])");
 if(btns[0])btns[0].onclick=function(){window.open(D.paypal,'_blank');};
 if(btns[1])btns[1].onclick=function(){cp(D.gcash,"GCash copied!");};
 // Social
 var s=document.getElementById("social-sec");
 s.innerHTML='<p style="font-size:.875rem;margin-bottom:1rem;color:var(--muted)">Connect with Shxwn on all platforms</p><div class="fg2">';
 if(D.instagram)s.innerHTML+='<button class="bs" title="Instagram"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></button>';
 if(D.tiktok)s.innerHTML+='<button class="bs" title="TikTok"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></button>';
 if(D.facebook)s.innerHTML+='<button class="bs" title="Facebook"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></button>';
 s.innerHTML+='</div>';
 var sb=s.querySelectorAll(".bs");
 if(sb[0])sb[0].onclick=function(){window.open(D.instagram,'_blank');};
 if(sb[1])sb[1].onclick=function(){window.open(D.tiktok,'_blank');};
 if(sb[2])sb[2].onclick=function(){window.open(D.facebook,'_blank');};
 // Sensi
 rSensi();
 // Perks
 var pk=document.getElementById("perks-sec");
 pk.innerHTML='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem"><div class="pk"><h4>Overkill</h4><div class="ps">Wildcard Combo</div><ul>'+D.perksOverkill.map(function(p){return '<li><svg class="ic" style="color:var(--primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>'+p+'</li>'}).join('')+'</ul></div><div class="pk"><h4>Red Wildcard</h4><div class="ps">4 Perks Combo</div><ul>'+D.perksRed.map(function(p){return '<li><svg class="ic" style="color:var(--primary)" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>'+p+'</li>'}).join('')+'</ul></div></div>';
 // FOV
 document.getElementById("fov-sec").innerHTML='<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:1rem"><div class="fv"><div class="fv-v">'+D.fovRange+'</div><div class="fv-l">FOV RANGE</div></div><div class="fv"><div class="fv-v">'+D.fovFpp+'</div><div class="fv-l">FOV FPP</div></div></div>';
 // HowTo
 document.getElementById("howto-sec").innerHTML='<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:1rem"><div class="hs"><div class="hn">1</div><h4 style="font-weight:700;font-size:.875rem;letter-spacing:.1em;margin-bottom:.25rem;color:var(--text)">COPY CODE</h4><p style="font-size:.75rem;line-height:1.5;color:var(--muted)">Click the copy button on any loadout or setting card</p></div><div class="hs"><div class="hn">2</div><h4 style="font-weight:700;font-size:.875rem;letter-spacing:.1em;margin-bottom:.25rem;color:var(--text)">OPEN GAME</h4><p style="font-size:.75rem;line-height:1.5;color:var(--muted)">Launch CODM and go to loadout or settings menu</p></div><div class="hs"><div class="hn">3</div><h4 style="font-weight:700;font-size:.875rem;letter-spacing:.1em;margin-bottom:.25rem;color:var(--text)">IMPORT</h4><p style="font-size:.75rem;line-height:1.5;color:var(--muted)">Click Import button and paste the code</p></div><div class="hs"><div class="hn">4</div><h4 style="font-weight:700;font-size:.875rem;letter-spacing:.1em;margin-bottom:.25rem;color:var(--text)">DOMINATE</h4><p style="font-size:.75rem;line-height:1.5;color:var(--muted)">Equip and start destroying lobbies</p></div></div>';
}

function rLoadouts(){
 var ls=D.loadouts;
 var q=(document.getElementById("lsearch").value||"").toLowerCase();
 var filtered=ls.filter(function(l){
  if(cat!="All"&&l.category!=cat)return false;
  if(q&&l.name.toLowerCase().indexOf(q)<0&&(l.description||"").toLowerCase().indexOf(q)<0)return false;
  return true;
 });
 document.getElementById("loadouts-count").textContent="LOADOUTS ("+filtered.length+")";
 var fchips='<button class="chip '+(cat=="All"?"act":"")+'">All</button>';
 ["AR","SMG","Shotgun","LMG","Marksman","Sniper"].forEach(function(c){fchips+='<button class="chip '+(cat==c?"act":"")+'">'+c+'</button>';});
 document.getElementById("filter-chips").innerHTML=fchips;
 // bind chips
 Array.from(document.getElementById("filter-chips").querySelectorAll(".chip")).forEach(function(b){
  b.onclick=function(){cat=b.textContent;rLoadouts();};
 });
 // grid
 var g=document.getElementById("l-grid");
 var h="";
 filtered.forEach(function(l){
  var cc=CC[l.category]||"#dcaeff";
  h+='<div class="lc"><div class="lch"><span class="lcat" style="background:'+cc+'20;color:'+cc+';border:1px solid '+cc+'40">'+(l.category||"").toUpperCase()+'</span><button class="lfv" style="color:'+(l.favorite?cc:'var(--subtle)')+'" data-id="'+l.id+'"><svg class="ic" viewBox="0 0 24 24" fill="'+(l.favorite?'currentColor':'none')+'" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></button></div>';
  h+='<div class="limg">'+(l.image?'<img src="'+l.image+'" alt="" style="max-height:100%;max-width:100%;object-fit:contain">':'&#9678;')+'</div>';
  h+='<div class="ln">'+(l.name||"").toUpperCase()+'</div>';
  h+='<div class="ld">'+(l.description||"—")+'</div>';
  if(l.attachments)h+='<div class="la"><strong>ATTACHMENTS</strong><br>'+l.attachments+'</div>';
  h+='<div class="lact"><button class="lco" style="background:'+cc+'" data-copy="'+(l.code||l.attachments||"").replace(/"/g,'&quot;')+'"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> COPY</button></div></div>';
 });
 g.innerHTML=h||'<div style="grid-column:1/-1;text-align:center;padding:4rem 0;color:var(--subtle)">No weapons match your filters</div>';
 // bind copy buttons
 g.querySelectorAll(".lco").forEach(function(b){
  b.onclick=function(){cp(b.getAttribute("data-copy"),"Copied!");};
 });
 // bind fav
 g.querySelectorAll(".lfv").forEach(function(b){
  b.onclick=function(){
   var id=parseInt(b.getAttribute("data-id"));
   D.loadouts=D.loadouts.map(function(l){return l.id==id?Object.assign({},l,{favorite:l.favorite?0:1}):l;});
   rLoadouts();
   rHome();
  };
 });
}

// Tab switching
document.querySelectorAll(".tb").forEach(function(b){
 b.onclick=function(){
  var t=b.getAttribute("data-tab");
  document.querySelectorAll(".tb").forEach(function(x){x.classList.remove("act");});
  b.classList.add("act");
  document.querySelectorAll(".tc").forEach(function(x){x.classList.remove("act");});
  document.getElementById(t+"-tab").classList.add("act");
  if(t=="loadouts")rLoadouts();
 };
});

// Search
var si=document.getElementById("lsearch");
if(si)si.oninput=function(){rLoadouts();};

// Init
rHome();
rLoadouts();
