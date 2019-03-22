#!/usr/bin/env node
 //上面一句话不要随便修改 作用：帮助脚本找到node的脚本解释器，没他不行。
const fs = require("fs-extra");
const path = require("path");
const chalk = require('chalk')

//文件
let importFile = fs.readFileSync(`${__dirname}/configFile/importFile.js`, 'utf8');
let routerConfig = fs.readFileSync(`${__dirname}/configFile/routerConfig.js`, 'utf8');
let classFunc = fs.readFileSync(`${__dirname}/configFile/classFunc.js`, 'utf8');
let levelsFileText = fs.readFileSync(`${__dirname}/configFile/level2.js`, 'utf8');

//menu的文件夹数据格式不能变，参照menuTemplate
const menu = JSON.parse(fs.readFileSync(`./config/menu.js`, 'utf8'));
console.log(chalk.green('Pay attention to the location of the menu. If it is wrong, it is likely that the location of the menu is wrong.'));


let rootCatalog = path.resolve();
let menuRootArr;
let reRoot = /\//g;

for (let i=0; i<menu.length; i++){

    process.chdir(rootCatalog)
    //首页的自动化配置
    if (menu[i].url.trim()){

        menuRootArr = menu[i].url.split(reRoot);  
        //新建并判断   
        if (fs.ensureDirSync(firstUpperCase(menuRootArr[2]))) {

            //切换目录
            changeCatalog(menuRootArr[2])
            //一级目录下的jsx文件 
            fileGenerate(menuRootArr[2], menuRootArr[3])

            //新建二级文件
            fs.ensureDirSync(menuRootArr[3])
            //切换目录
            changeCatalog(menuRootArr[3])
            //二级目录下的jsx文件
            levelsFile(menuRootArr[3], "首页")

        }
    }
    //多文件夹
    else if (menu[i].Level2.length){

        menu[i].Level2.map(aMenu=>{
            //回到根目录
            process.chdir(rootCatalog)
            menuRootArr = aMenu.url.split(reRoot); 
            //新建并判断   
            if (fs.ensureDirSync(firstUpperCase(menuRootArr[2]))) {    

                //切换目录
                changeCatalog(menuRootArr[2])   
                //一级目录下的jsx文件, 多路由
                fileGenerate(menuRootArr[2], menuRootArr[3], menu[i].Level2)

                //新建二级文件    
                if ( fs.ensureDirSync(firstLowerCase(menuRootArr[3])) ) {
                     //切换目录
                    changeCatalog(menuRootArr[3])
                    //二级目录下的jsx文件
                    levelsFile(menuRootArr[3], aMenu.item)
                }
               
            }
            else {
                //切换目录
                changeCatalog(menuRootArr[2])
                //新建并判断二级文件            
                if ( fs.ensureDirSync(firstLowerCase(menuRootArr[3])) ) {
                    //切换目录
                    changeCatalog(menuRootArr[3])
                    //二级目录下的jsx文件
                    levelsFile(menuRootArr[3], aMenu.item)
                }
              
            }

        })

    }

}


/*
* 二级目录jsx文件
**/
function levelsFile(Level2,catalogName){

    var classNameRe = /(?:class)(.+)(?:extends)/g;
    var exportNameRe = /(?:default)(.+)(?:;)/g;
    var nameRe = /(?:<div>)(.+)(?:<\/div>)/g;
    var strClsName = `class ${firstUpperCase(Level2)} extends`;
    var strExportName = `default ${firstUpperCase(Level2)};`;
    var strHtml = `<div>${catalogName}</div>`;
    var aFunc = levelsFileText.replace(classNameRe, strClsName).replace(exportNameRe, strExportName).replace(nameRe, strHtml);
    fs.writeFileSync(`${firstLowerCase(Level2)}.jsx`,  aFunc)
    

}


/* 
*一级目录下的jsx文件 
**/
function fileGenerate(Level1, Level2, mulRouter){

    //写入导入文件
    fs.appendFileSync(`${firstLowerCase(Level1)}.jsx`, importFile+`\n\n`);

    //写入路由
    if (mulRouter) {
        router(Level1, Level2, mulRouter)
    }
    else {
        router(Level1, Level2)
    }

    //写入class类
    var classNameRe = /(?:class)(.+)(?:extends)/g;
    var exportNameRe = /(?:default)(.+)(?:;)/g;
    var strClsName = `class ${firstUpperCase(Level1)} extends`;
    var strExportName = `default ${firstUpperCase(Level1)};`;
    var aFunc = classFunc.replace(classNameRe, strClsName).replace(exportNameRe, strExportName);
    fs.appendFileSync(`${firstLowerCase(Level1)}.jsx`,  aFunc)

}

/*
* 组装路由
**/
function router(Level1, Level2, mulRouter){
    var routerArr = [];
    if (mulRouter) {
        mulRouter.map(item=>{
            var arr =  item.url.split("/");
            routerArr.push( aRouter(arr[2], arr[3]) )
        })
    }
    else {
        routerArr.push( aRouter(Level1, Level2) )
    }

    var routes = `const routes = [
                    ${routerArr}
                    ];`;
    fs.appendFileSync(`${firstLowerCase(Level1)}.jsx`,  routes+`\n\n`)
}

function aRouter(Level1, Level2){

    var routerRe = /(?:import\(")(.+)(?:"\))/g;
    var pathRe = /(?:"path":)(.+)(?:,)/g;  
    var strP = `path: "${Level2}",`;
    var strR = `import("~/container/${Level1}/${Level2}/${firstLowerCase(Level2)}")`;
    return routerConfig.replace(pathRe, strP).replace(routerRe, strR);

}

/* 
*更改目录 
**/
function changeCatalog(root){

    var nowRoot = path.resolve(root);
    process.chdir(nowRoot);

}

/*
  首字母小写
*/
function firstLowerCase(str) {
    let arr = str.split("");
    return arr.splice(0, 1)[0].toLowerCase() + arr.join("")
}

/*
  首字母大写
*/
function firstUpperCase(str) {
    let arr = str.split("");
    return arr.splice(0, 1)[0].toUpperCase() + arr.join("")
}