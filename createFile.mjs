import fs from 'fs';
import path from 'path';

// 获取命令行参数
const args = process.argv.slice(2);
const map = {
  'e': 'easy',
  'm': 'medium',
  'h': 'hard',
  'E': 'easy',
  'M': 'medium',
  'H': 'hard'
}
// 确保命令的格式正确
if (args.length !== 2 || !map[args[0]]) {
  console.error('用法: yarn c e/m/h exampleName');
  process.exit(1);
}

const exampleName = args[1];

const folderPath = path.resolve(map[args[0]]);

const existingFiles = fs.readdirSync(folderPath);

const fileIndex = existingFiles.filter(file => file.endsWith('.js')).length + 1;

const formattedIndex = fileIndex.toString().padStart(3, '0');

const fileName = `${formattedIndex}-${exampleName}.js`;
const testName = `${args[0]}_${fileName.split('.')[0]}.test.js`

const filePath = path.join(folderPath, fileName);
const testPath = path.join('test',testName)

fs.writeFile(filePath, '\n\n\n\n\n\n\n\n\n\n\n\n\n//module.exports = ', (err) => {
  if (err) throw err;
  console.log(`文件 ${fileName} 已成功创建在 ${folderPath} 文件夹下`);
});
fs.writeFile(testPath, `const fun = require('../${map[args[0]]}/${fileName}');\ntest('${args[0]}_${fileName.split('.')[0]}', () => {\n\texpect(fun()).toBe()\n})`, (err) => {
  if (err) throw err;
  console.log(`文件 ${testName} 已成功创建在 ${testPath} 文件夹下`);
});