const repo = require('github-download-parts');
const ora = require('ora')
const { prompt } = require('inquirer');

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
    }
]

module.exports = prompt(question).then(({ name, catalog, filename }) => {

    const spinner = ora('Downloading template...');
    spinner.start()
    if (filename) {
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
    
})