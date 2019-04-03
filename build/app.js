!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=10)}([function(e,t){function o(e){var t=new Error('Cannot find module "'+e+'".');throw t.code="MODULE_NOT_FOUND",t}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id=0},function(e){e.exports={"react-base":"MemoryNoodles/react-base","login-template":"MemoryNoodles/login-template","system-template":"MemoryNoodles/system-template","page-template":"MemoryNoodles/page-template"}},function(e,t){e.exports=require("ora")},function(e,t){e.exports=require("github-download-parts")},function(e,t){e.exports=require("chalk")},function(e,t){e.exports=require("fs-extra")},function(e,t){e.exports=require("inquirer")},function(e,t,o){const{prompt:n}=o(6),{ensureDirSync:r}=o(5),a=o(4),s=o(3),i=o(2);let c=o(1);const l=[{type:"input",name:"name",message:"Template name:",validate:e=>!!c[e]||(""===e?"Name is required!":c[e]?void 0:"This template doesn't exists.")},{type:"input",name:"catalog",message:"catalog name:",validate:e=>""===e||(!!r(e)||"This catalog  exists.")},{type:"input",name:"filename",message:"file name:"}];e.exports=(()=>{n(l).then(({name:e,catalog:t,filename:o})=>{const n=i("Downloading template...");n.start(),o?s(c[e],t,o).then(()=>{console.log(a.green("download success")),n.stop(),process.exit(1)}).catch(()=>{console.log(a.red("download error")),n.stop(),process.exit(1)}):s(c[e],t).then(()=>{console.log(a.green("download success")),n.stop(),process.exit(1)}).catch(()=>{console.log(a.red("download error")),n.stop(),process.exit(1)})})})},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("commander")},function(e,t,o){(function(e){const t=o(9),{resolve:n}=o(8);var r=o(7);const a=t=>n(e,"./commands/",t);t.command("add").description("Add a new template").alias("a").action(()=>{o(0)(a("add"))}),t.command("list").description("List all the templates").alias("l").action(()=>{r()}),t.command("down").description("down a new template").alias("d").action(()=>{o(0)(a("down"))}),t.command("gitLink").description("down a new template").alias("link").action(()=>{o(0)(a("gitLink"))}),t.parse(process.argv),t.args.length||t.help()}).call(this,"bin\\template")}]);