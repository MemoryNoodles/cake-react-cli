const { prompt } = require('inquirer')
const { ensureDirSync } = require('fs-extra')  
const chalk = require('chalk')
const repo = require('github-download-parts');
const ora = require('ora')

let tplJson = require(`../gitTemplate.json`)     //模板列表


const question = [
    {
        type: 'input',
        name: 'name',
        message: 'Template name:',
        validate (val) {
            if (tplJson[val]) {
                return true
            } else if (val === '') {
                return 'Name is required!'
            } else if (!tplJson[val]) {
                return 'This template doesn\'t exists.'
            }
        }
    },
    {
        type: 'input',
        name: 'catalog',
        default:"myApp",
        message: 'catalog name:',
        validate (val) {
            //存在这个文件则返回null, 不存在直接创建文件夹
            if (!ensureDirSync(val)) {
                return 'This catalog  exists.'
            } else if (val === '') {
                return 'catalog Name is required!'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'filename',
        message: 'file name:',
    }
]

module.exports = prompt(question).then(({ name, catalog, filename }) => {

    const spinner = ora('Downloading template...');
    spinner.start()
    if (filename) {
        console.log(filename, 111)
        repo(tplJson[name], catalog, filename)
        .then(() => {
            console.log(chalk.green('download success'));
            spinner.stop()
            process.exit(1);
        })
        .catch(() => {
            console.log(chalk.red('download error'));
            spinner.stop()
             process.exit(1);
        });
    }
    else {
        console.log(filename, 22)
        repo(tplJson[name], catalog)
        .then(() => {
            console.log(chalk.green('download success'));
            spinner.stop()
            process.exit(1);
        })
        .catch(() => {
            console.log(chalk.red('download error'));
            spinner.stop()
             process.exit(1);
        });
    }

})
