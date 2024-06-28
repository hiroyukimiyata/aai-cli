// node ./scripts/block-export.js --cssText ${cssText} --blockName ${blockName}
const { program } = require('commander');
const fs = require('fs');

program
  .option('--cssText <cssText>')
  .option('--blockName <blockName>');

program.parse();

const options = program.opts();
const blockPath = `./blocks/${options.blockName}`;
const defaultJsContent = `export default function decorate(block) {
      }
      `;

fs.promises
  .mkdir(blockPath, { recursive: true })
  .then(() => {
    fs.writeFile(`${blockPath}/${options.blockName}.js`,
      defaultJsContent,
      err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
    });
    fs.writeFile(`${blockPath}/${options.blockName}.css`,
      options.cssText,
      err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
    });
  });
