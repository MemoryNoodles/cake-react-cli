//webpack打包， 依赖的文件里在依赖其他文件 需要绝对路劲
let tplJson = require(`${__dirname}\\..\\gitTemplate.json`);
//let tplJson = require(`../gitTemplate`);
const matter = require('gray-matter');
var Table = require('cli-table3'); 

module.exports = function(){
    console.log(matter(JSON.stringify(tplJson)));
}