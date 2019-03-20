#!/usr/bin/env node
 //上面一句话不要随便修改 作用：帮助脚本找到node的脚本解释器，没他不行。
const program = require('commander');
const { resolve } = require("path");
//const ora = require('ora');
const res = command => resolve(__dirname, './commands/', command); 



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
    .command('down')
    .description('down a new template')
    .alias('d')
    .action(() => {
        require(res('down'))
    })

//解析
program.parse(process.argv)

//帮助命令提示
if(!program.args.length){
  program.help()
}



//createApp(root)
//
//function createApp(root) {
//
//    //存在这个文件则返回null, 不存在直接创建文件夹
//    if (!fs.ensureDirSync(root)) {
//        console.log(
//            'Either try using a new directory name。'
//        );
//        console.log();
//        console.log(`The directory ${chalk.green(root)} contains files that could conflict`)
//        process.exit(1);
//    }
//
//    console.log(`Creating a new React app in ${chalk.green(root)}.`);
//
//
//    goDownFile(dfJson[gitAddress], root, afile);
//}

