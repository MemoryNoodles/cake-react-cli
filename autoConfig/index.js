#!/usr/bin/env node

const program = require('commander');

const {
    resolve
} = require("path");

program
    .command('updateInfo')
    .description('change user info')
    .alias('u')
    .action(() => {
        require("./commands/updateInfo")
})


program
    .command('go')
    .description('Automatically generate configuration')
    .alias('g')
    .action(() => {
        require("./commands/request.js")
})

