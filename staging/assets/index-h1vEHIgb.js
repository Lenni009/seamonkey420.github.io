import{p as s,aq as l,t as e,H as u,u as o,f as c,v as r,g as i,l as m}from"./links-H6SzOJtU.js";import{l as d,p,s as f,a as n,b as h,w as t,c as g,d as w,e as I,f as E,r as S,g as B}from"./index-wq0h65tS.js";import{f as b,m as k}from"./mineralDatalists-Gon6GDq6.js";const F=[{element:["systemInput","portalglyphsInput"],func:()=>d()},{element:"faunaNumberInput",func:function(){p(parseInt(s[this.dataset.destNoauto]),"faunaSentencePlural")}},{element:"sentinelInput",func:()=>f()},{element:["descriptionInput","wormmaxdepthInput"],func:function(){n(this)}},{element:"sandwormInput",func:()=>h()},{element:"sandwormImgUpload",handler:"change",func:function(){l(this)}},{element:"autoSpawn",func:()=>t()},{element:"addResourceButton",handler:"click",func:function(){g(this)}},{element:"faunaToggleButton",handler:"click",func:function(){e("fauna",this)}},{element:"floraToggleButton",handler:"click",func:function(){e("flora",this)}},{element:"mineralToggleButton",handler:"click",func:function(){e("mineral",this)}},{element:"addFaunaButton",handler:"click",func:function(){w(this)}},{element:"addFloraButton",handler:"click",func:function(){I(this)}},{element:"addMineralButton",handler:"click",func:function(){E(this)}}],v={input:{resourceInputs:"resourceInputs",autoSpawn:"autoSpawnInput"},output:{resourceBullets:"resourceBullets",creatures:"creatures",plants:"plants",minerals:"minerals",sandworm:"sandworm"}};m.resetExternal=()=>document.dispatchEvent(new Event("pageReset")),document.addEventListener("pageReset",(()=>S()));const M=[b,k];M.forEach((n=>u(n))),o(v),c(F),r(i.input.resourceInputs.querySelector("button"),"click"),n(),t(),B();
