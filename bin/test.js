const chalk = require('chalk')
const repo = require('github-download-parts');
const ora = require('ora');

const spinner = ora('Downloading template...');
spinner.start()
repo("MemoryNoodles/react-base", "fist")
    .then(() => {
    console.log(chalk.green('download success'));
    spinner.stop()
    // process.exit(1);
})
    .catch(() => {
    console.log(chalk.red('download error'));
    spinner.stop()
    // process.exit(1);
});
