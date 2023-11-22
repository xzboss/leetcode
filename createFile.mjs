import fs from 'fs';
import path from 'path';

// 获取命令行参数
const args = process.argv.slice(2);
console.log(args,'@@@')
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

// 获取示例名称
const exampleName = args[1];

// 获取 "easy" 文件夹的路径
const folderPath = path.resolve(map[args[0]]);

// 获取 "easy" 文件夹中已存在的文件列表
const existingFiles = fs.readdirSync(folderPath);

// 计算文件的序号
const fileIndex = existingFiles.filter(file => file.endsWith('.js')).length + 1;

// 使用三位数格式化序号
const formattedIndex = fileIndex.toString().padStart(3, '0');

// 构造带有序号的文件名
const fileName = `${formattedIndex}-${exampleName}.js`;

// 在 "easy" 文件夹中创建文件
const filePath = path.join(folderPath, fileName);

fs.writeFile(filePath, '', (err) => {
  if (err) throw err;
  console.log(`文件 ${fileName} 已成功创建在 ${folderPath} 文件夹下`);
});
