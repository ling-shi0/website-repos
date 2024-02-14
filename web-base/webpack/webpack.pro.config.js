/*
 * @Description: 
 * @Author: lingshi
 * @Date: 2023-12-24 15:55:46
 * @LastEditTime: 2023-12-24 16:26:47
 * @LastEditors: lingshi
 */
const path = require('path')

module.exports = {
    mode: 'production',  // 模式，当前为开发模式，还有个生产模式，生产模式会自动压缩编译后代码到一行
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,    // ts-loader是官方提供的处理tsx的文件
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve:{
    	// 打包的时候报错：Module not found :Error : can't resolve 'App'
    	// 我们引入组件的时候，并没有加后缀(.tsx)，
    	// 此配置会按顺序为我们找App.js App.jsx...找到就返回，找不到会报错
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less', '.scss']
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}
