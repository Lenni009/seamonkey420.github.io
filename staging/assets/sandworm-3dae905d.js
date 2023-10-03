import{p as e,w as s,g as r,y as m,d as g,F as b,m as c,a as y,E as w,b as x,c as o}from"./main-3e6efaab.js";import{a as u,b as E,c as h,d as I}from"./startup-818b455e.js";function i(){const a=e.planet,n=e.moon;if(!a)return void(e.name="");const t=n||a;s(t,"bodyName"),e.name=`Immortal Worm ${t}`}function p(){const e=(()=>{const e=r.input.autoSpawn;for(const a of Array.from(e))if(a.checked)return a.value;return""})(),a=`This creature ${e} automatically spawn on game reload`,n=r.output.autoSpawn;n.style.display=e?"":"none",e&&(n.innerText=a),m()}function d(){const a=g(),n="Eisvana Rare Fauna Album";s(`[[${n}]]${a}`,"addInfo"),m(),e.catalogue=n}function v(){return e.catalogue.split("|").at(-1)}function S(){b();const{name:a,wormclass:n}=e;return`${a}|${n}`}function P(){return`(${e.wormmaxdepth}ku)<br>Stomach: ${e.wormstomach}`}function $(){return e.catalogue.split("|")[0]}function k(){const a=["","Worm scan","Moon Page","Planet Page","System Page","Galaxy Map"];if(!e.moon){const e=a.findIndex((e=>e.toLowerCase().includes("moon")));a.splice(e,1)}e.galleryArray=a}const G=[{element:["planetInput","moonInput"],func:()=>{i(),c(void 0,void 0,!0),u()}},{element:"autoSpawn",func:()=>p()},{element:"researchTeam",func:()=>d()},{element:"wormclassInput",func:()=>u()},{element:"wormmaxdepthInput",func:()=>E()},{element:["discoveredInput","discoveredlinkInput"],func:()=>h()}],T={input:{autoSpawn:"autoSpawnInput"}};o.generateGalleryArray=()=>k(),o.albumLinkGen=()=>$(),o.albumOtherExternal=()=>P(),o.albumNameExternal=()=>S(),o.albumItemTypeExternal=()=>v(),y("galleryExplanationExternal","\n\tThe preferred order of pictures is as follows:\n\t<div class='dialog-center'>\n\t\t<ol class='dialog-list'>\n\t\t\t<li>Worm scan</li>\n\t\t\t<li>Moon Page</li>\n\t\t\t<li>Planet Page</li>\n\t\t\t<li>System Page</li>\n\t\t\t<li>Galaxy Map</li>\n\t\t</ol>\n\t</div>"),w(T),x(G),i(),c(void 0,void 0,!0),d(),p(),I();
