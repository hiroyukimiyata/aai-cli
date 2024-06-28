const { Command } = require('commander');
const program = new Command();

program
  .name('Adobe AI CLI')
  .description('CLI')
  .version('0.1.0');

program.command('d2b')
  .description('Convert Front-end specification into EDS block code. Please execute on the root folder of EDS repository.')
  .requiredOption('-g, --github <string>', 'Specify GitHub Issue URL');

program.parse();