//#!/usr/bin/env node
const program = require('commander');

const {
    resolve
} = require("path");

const updateInfo = require("./commands/updateInfo");
//const request = require("./commands/request.js")


program
    .command('updateInfo')
    .description('change user info')
    .alias('u')
    .action(() => {
         updateInfo()
        //require("./commands/updateInfo")
    })


program
    .command('go')
    .description('Automatically generate configuration')
    .alias('g')
    .action(() => {
       console.log(__dirname)
        //request()
        require(`${__dirname}/commands/request.js`)
})

//解析
program.parse(process.argv)

//帮助命令提示
if (!program.args.length) {
    program.help()
}

