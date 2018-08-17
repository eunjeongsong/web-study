# web-study
webpack sample project 

<br/>

## 프로젝트에서 사용하는 도구

### Webpack 
- 모든것은 모듈(Module) 이다. JS, CSS, Images, HTML 모두 모듈이 될 수 있다. require(“myJSFile.js”), require(“myCSS.css”) 가 가능하다는 의미다. 재사용성이 있다는 것을 의미한다.
- 필요할 때 Load 할 수 있다. 전형적인 module bundlers 는 모든 모듈을 가져와서 bundler.js 파일 하나를 생성하는데 실제 웹에서 bundle.js 는 10-15MB 이고, 계속 로드중일 수 있다. 그래서 Webpack 은 코드 분할과 여러 “bundle” 파일을 생성하고 비동기적으로 앱의 일부를 로드하는 기능이 있으며, 필요한것을 필요할 때 로드하는것을 가능하게 한다.

### Webpack 의 defualt 기능
- uglify
- import (ES6 문법)
- bundling

### bundler
- browserify : 한번 저장시에 시간이 오래 걸린다.
- webpack 은 캐시를 통해 속도 향상

### reloader
- browser-sync
- webpack-dev-server (webpack + reloader)
    - [Production 모드와 Development 모드 두가지 모드가 존재한다.](#새로-추가된-기능)

### 새로 추가된 기능
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/

### transform
- babelify (browesify + babel)
- bable-loader (webpack + babel)
    - brwoserify 는 모든 모듈에 대해서 돌려도 상관없다 js 에 대해서만 돌기 때문에 target 을 정해서 돌릴 필요가 없다.
    - webpack 은 target 을 정확하게 정해야한다. 어떤 target 에 대해서 어떤 파일에 대해서 돌릴지에 따라 configuration 이 달라진다.
    - config 파일중 .js 확장자를 사용하는 경우 항상 아래의 구문 필요
module.exports = {
    
}

### hot-module
- 개인의 추가 옵션 필요함
- 코드가 바뀌면 페이지 전체를 새로고침 하는게 아니라 바뀐 위치에 다른모듈을 끼워넣음 (부분 교체로 개발 효율 향상)

### module 
- import a from ‘*.js’ 
- js 모듈만 import 가능한데, webpack 은 모든것이 모듈로 간주하여 import 가능하게함

<br/>


## API 버전의 큰 변화
- babel (6 -> 7)
    - babel-preset-env -> @babel/preset-env
    - .babelrc -> babel.config.js

- webpack (3 -> 4)
    - webpack-dev-server -> webpack-serve
    - webpack-cli -> webpack-command
    - configuration 없이 Webpack 시작이 가능해짐

<br/>


## Configuration 파일을 관리하는 세가지 방법
1. babel-config.js, webpack.config.js, package.json 처럼 모든 configuration 파일을 따로 관리
```js
module.exports = {
    "presets": [
        "@babel/preset-react"
    ]
}
```

2. webpack.config.js 에서 모두 관리 
```js
module.exports = {
    entry: './src/index.js',
    mode: process.env.NODE_ENV == 'development' ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.js$/,      // regx
                use: {
                    loader: 'babel-loader',
                    options:{
                        babelrc: false,
                        presets: [
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    }
}
```

3. package.json 에서 모두관리
```json
{
  "name": "web-study",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack src/index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@babel/core": "^7.0.0-beta.56",
    "@babel/preset-react": "^7.0.0-beta.56",
    "babel-loader": "^8.0.0-beta.4",
    "react": "^16.4.2",
    "react-dom": "^16.4.2",
    "webpack": "^4.16.5"
  },
  "devDependencies": {
    "webpack-cli": "^3.1.0"
  },
  "bable":{
    "presets": [
      "@babel/preset-react"
    ]
  }
}
```

<br/>