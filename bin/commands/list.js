let tplJson = require(`../gitTemplate`);
const matter = require('gray-matter');
var Table = require('cli-table3'); 

module.exports = function(){
    console.log(matter(JSON.stringify(tplJson)));
}()