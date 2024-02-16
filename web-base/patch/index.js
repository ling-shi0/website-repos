/*
 * @Description: node脚本
 * 用于在 dev 运行态时执行，来去总结果库拉取最新的库的代码 复制到 public 里面  
 * @Author: lingshi
 * @Date: 2024-02-15 18:13:50
 * @LastEditTime: 2024-02-15 18:49:27
 * @LastEditors: lingshi
 */
const fs = require('fs');
const path = require('path');

const fromPath = path.resolve(__dirname, '../../web-repos-build-result/');
const toPath = path.resolve(__dirname, '../public/');

const projectList = ['web-theme', 'web-unity-service'];

const main = () => {
  console.log("-----开始执行复制-----");
  console.log("-----判断文件存在与否-----");
  const promiseList = [];
  projectList.forEach(item => {
    promiseList.push(new Promise((resol, rej) => {
      fs.stat(`${fromPath}/${item}/index.js`, function (err, stats) {
        if(stats && stats.isFile()) {
          fs.copyFile(`${fromPath}/${item}/index.js`, `${toPath}/${item}/index.js`, (err) => {
              if (err) {
                console.log(err);
                throw err;
              }
              console.log(item,'-----源文件已拷贝到目标文件-----');
              resol();
            }
          );
        } else {
          console.log(item,'-----源文件不存在-----');
          resol();
        }
      })  
    }))
  });
  
  Promise.all(projectList).then(() => {
    console.log("-----文件复制完成-----");
  });
}

main();
