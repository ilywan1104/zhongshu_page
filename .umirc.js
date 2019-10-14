/*
 * @Description: 
 * @version: 1.0.0
 * @Author: Tony.Z
 * @Date: 2019-10-11 22:48:39
 * @LastEditors: Tony.Z
 * @LastEditTime: 2019-10-11 22:48:39
 */

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: false,
      dynamicImport: false,
      title: '众数科技-专注互联网产品深度定制化开发',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
}
