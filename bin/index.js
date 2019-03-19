#!/usr/bin/env node
 //上面一句话不要随便修改 作用：帮助脚本找到node的脚本解释器，没他不行。
const fs = require('fs-extra');
const repo = require('github-download-parts');
const chalk = require('chalk');
const dfJson = require("./gitFileConfig.js");
const program = require('commander');
const ora = require('ora');
const res = command => resolve(__dirname, '../commands/', command)


program
    .version(require('../package.json').version)
    .on('--help', () => {
        //提示...
    })
    .parse(process.argv);


program
    .command('add')
    .description('Add a new template')
    .alias('a')
    .action(() => {
        require(res('add'))
    })

program
    .command('list')
    .description('List all the templates')
    .alias('l')
    .action(() => {
        require(res('list'))
    })

program
    .command('init')
    .description('Generate a new project')
    .alias('i')
    .action(() => {
        require(res('init'))
    })



createApp(root)

function createApp(root) {

    //存在这个文件则返回null, 不存在直接创建文件夹
    if (!fs.ensureDirSync(root)) {
        console.log(
            'Either try using a new directory name。'
        );
        console.log();
        console.log(`The directory ${chalk.green(root)} contains files that could conflict`)
        process.exit(1);
    }

    console.log(`Creating a new React app in ${chalk.green(root)}.`);


    goDownFile(dfJson[gitAddress], root, afile);
}

function goDownFile(gitAddress, root, afile) {
    const spinner = ora('Downloading template...');
    spinner.start()
    repo(gitAddress, root, afile)
        .then(() => {
            spinner.stop()
            console.log(chalk.green('download success'));
        })
        .catch(() => {
            console.log(chalk.red('download error'));
            spinner.stop()
        });
}