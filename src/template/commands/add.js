const { prompt } = require('inquirer')                  //一款命令行的交互框架
const { writeFile } = require('fs-extra')   
const path = require("path");

//模板列表 webpack打包需要绝对路劲
let tplJson = require(`${__dirname}\\..\\gitTemplate.json`)     
//let tplJson = require(`../gitTemplate.json`)     //模板列表

const question = [ 
    {
        type: 'input',
        name: 'name',
        message: 'template name',
        validate (val) {
            if (tplJson[val]) {
                return 'template is existed!'
            } else if (val === '') {
                return 'template name is required!'
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        name: 'userName',
        message: 'git username',
        validate (val) {
            if (val !== '') {
                return true
            }
            return 'git username is required!'
        }
    },
    {
        type: 'input',
        name: 'repository',
        message: 'git repository name',
        validate (val) {
            if (val !== '') {
                return true
            }
            return 'git repository name  is required!'
        }
    }
];

module.exports = ()=>{
    prompt(question).then(({ name, userName, repository }) => {
        tplJson[name] = `${userName}/${repository}`

        writeFile(`${__dirname}\\..\\gitTemplate.json`, JSON.stringify(tplJson), 'utf-8', (err) => {
            if (err) {
                console.log(`${err} 模板写入文件出错！`);
            }
            console.log('New template has been added successfully!')
        })
    })
}
