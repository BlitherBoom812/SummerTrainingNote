yarn add corejs@3

yarn add regenerator -runtime

yarn add --dev babel-loader style-loader css-loader @babel/preset-env @babel/core



 webpack 不能正常打包 css 的原因(no appropriate loader ... )：

版本问题。回退css-loader和style-loader的版本：

亲测，下列版本组合可以使用。

```json
{
  "name": "exp2-webpack",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "css-loader": "3.3.0",
    "lodash": "^4.17.21",
    "style-loader": "1.0.0",
    "wepback": "^1.0.0"
  },
  "devDependencies": {
    "webpack": "^5.73.0",
    "webpack-cli": "^4.10.0"
  }
}

```

