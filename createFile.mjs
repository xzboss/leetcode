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
  console.error('用法: npm run create e/m/h exampleName');
  process.exit(1);
}

const exampleName = args[1];

const folderPath = path.resolve(map[args[0]]);

const existingFiles = fs.readdirSync(folderPath);

const fileIndex = existingFiles.filter(file => file.endsWith('.js')).length + 1;

const formattedIndex = fileIndex.toString().padStart(3, '0');

const fileName = `${formattedIndex}-${exampleName}.js`;

const filePath = path.join(folderPath, fileName);

fs.writeFile(filePath, '', (err) => {
  if (err) throw err;
  console.log(`文件 ${fileName} 已成功创建在 ${folderPath} 文件夹下`);
});
