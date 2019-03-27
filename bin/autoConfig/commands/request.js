#!/usr/bin/env node
 //上面一句话不要随便修改 作用：帮助脚本找到node的脚本解释器，没他不行。
/**
 * Created with react_project.
 * User: 王洪瑞/3153981409@qq.com
 * Date: 2019/3/18
 * Time: 13:51
 *
 */
var request = require("request");
const fs = require('fs-extra');
request = request.defaults({jar: true});

const chalk = require('chalk')
const userInfo = require(`${__dirname}/../userInfo.json`)

//加判断
if (!(userInfo.username && userInfo.password && userInfo.projectId)){
    console.log(chalk.red("username/password/projectId is required, you must run cake-auto-config u to update userinfo"));
    process.exit(1)
}
//转驼峰
function toHump(name) {
    return name.toLowerCase().replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}
request.post({
    url:'http://192.168.7.250:17302/login/login',
    form:{
        usercode: userInfo.username,
        passwd: userInfo.password
    }
}, function () {
    request.post({
        url:'http://192.168.7.250:17302/operator/port/queryCondition',
        form:{
            projectId: userInfo.projectId
        }
    }, function (err,response) {
        fs.writeFileSync('./src/constants/api.js', "");
        fs.writeFileSync('./src/until/api.js', `import * as C from '~/constants/api';\nimport {PostMethod, PostMethodNoMessage} from './handleFetch'\nexport default {\n`);

        if (!fs.existsSync("./mock-server/api.json")) {
            fs.writeFileSync('./mock-server/api.json',`{\n"data":[`)
        }
       
        const content = JSON.parse(response.body).content
        content.data.map((item,index)=>{
            console.log(`writing........`,index);
            const upStr = `${item.url.split("/")[2].toUpperCase().trim()+"_"+item.url.split("/")[3].toUpperCase().trim()}`
            const constApiStr = `export const ${upStr} = "${item.url}"; //${item.portExplain} \n` //const api的文件生成模板字符串
            const untilApiStr = `${toHump(upStr)}:(params)=>PostMethod(C.${upStr}, params),//${item.portExplain}\n`;
            const apiJsonStr = `{\n "url":"${item.url}",\n"desc":"${item.portExplain}",\n"mock":true\n,"res":${item.result}\n}${index<content.data.length-1?",":""}`;
            const ApiJsonObj = {
                url:`${item.url}`,
                desc:`${item.portExplain}`,
                mock:true,
                res:item.result?JSON.parse(item.result):{},
            }
            //所有接口API
            fs.appendFileSync("./src/constants/api.js",constApiStr);
            //使用接口方法
            fs.appendFileSync("./src/until/api.js",untilApiStr);
            //mock数据
            var apiJson3 = fs.readFileSync("./mock-server/api.json").toString();
      
            var arr = apiJson3.split(/\n/g);
            //接口新增后写入到api.json的内容不会覆盖之前的
            if(arr[arr.length-1].trim() == "}"){
                var json = JSON.parse(apiJson3);
                var flag =  json.data.some(api=>{
                    return api.url == item.url
                })
                if (!flag) {
                    json.data.push(`${JSON.stringify(ApiJsonObj,null,"\t")}${index<content.data.length-1?",\n":""}`)
                }
                fs.writeFileSync("./mock-server/api.json",JSON.stringify(json,null,"\t"));
          
            }
            else {
                fs.appendFileSync("./mock-server/api.json",`${JSON.stringify(ApiJsonObj,null,"\t")}${index<content.data.length-1?",\n":""}`);
            }
           
        })
        fs.appendFileSync('./src/until/api.js', `\n};`);

         var apiJson = fs.readFileSync("./mock-server/api.json");
         var arr = apiJson.toString().split(/\n/g);
        //接口新增后写入到api.json的内容不会覆盖之前的
        if(arr[arr.length-2].trim() != "]" ){
            fs.appendFileSync('./mock-server/api.json', `\n]\n}`);
        }
        
    })
})