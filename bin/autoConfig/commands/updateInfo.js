const { prompt } = require('inquirer')                  //一款命令行的交互框架
const { writeFile } = require('fs-extra')    
const chalk = require('chalk')

let userInfo = require(`../userInfo.json`)     //模板列表

const question = [
    {
        type: 'input',
        name: 'username',
        message: 'user name',
        validate (val) {
            if (val === '') {
                return 'template name is required!'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'password',
        message: 'password',
        validate (val) {
            if (val !== '') {
                return true
            }
            return 'password is required!'
        }
    },
    {
        type: 'input',
        name: 'projectId',
        message: 'projectId',
        validate (val) {
            if (val !== '') {
                return true
            }
            return 'projectId  is required!'
        }
    }
];

module.exports = prompt(question).then(({ username, password, projectId }) => {
    userInfo.username = username;
    userInfo.password = password;
    userInfo.projectId = projectId;


    writeFile(`../userInfo.json`, JSON.stringify(userInfo), 'utf-8', (err) => {
        if (err) {
            console.log(`${err} data write error！`);
        }
        console.log(chalk.green('success!'))
    })
})
