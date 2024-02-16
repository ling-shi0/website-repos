/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2024-02-15 14:58:23
 * @LastEditTime: 2024-02-16 16:00:59
 * @LastEditors: lingshi
 */
//引入gulp模块
const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babelify = require('babelify');


const pathDist = path.resolve(__dirname, '../web-repos-build-result/web-unity-service')

// 删除之前的组件
gulp.task('removeOldClass', function(done) {
  fs.unlink(`${pathDist}/index.js`,() => {
    console.log('删除旧文件成功！');
  });
  done();
});

//定义默认任务
gulp.task('generateServicesClass', function(done) {
  browserify({
    //先处理依赖，入口文件
    entries: ['./src/index.js'],
    //进行转化
    // transform: []
  })
    .transform(babelify, {
      presets: [
        '@babel/preset-env'  //转换es6代码
      ]
    })
    .bundle()
    .pipe(source("index.js"))
    .pipe(gulp.dest(`${pathDist}/`));
  done();
});

//gulp执行流程
gulp.task('default', gulp.series(['generateServicesClass'], done => {
  console.log('编译成功');
  done();
}));

