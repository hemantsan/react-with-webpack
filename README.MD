For setting up react project with webpack and npm.

This project aims to setting up a react app project with webpack from scratch. Here i have used npm to setup all things. then start a server. 
Follow all below steps and check in this repo where you are. Try to type every missing code when you start setup this will help you remember steps.

1. Create a folder, name it with project name
2. Initialize npm : npm init
3. Fill up required info for package.json
4. Install reactjs with production dependancies : npm install react react-dom --save
5. Install webpack dependancies : npm install webpack webpack-dev-server babel-loader babel-preset-env babel-preset-react babel-preset-stage-2 --save-dev
6. Create below folder structure : 
   - src > app
   - src > index.html

7. Create a file "webpack.config.js" and enter content below

    ```javascript
        var webpack = require('webpack');
        var path = require('path');

        var DIST_DIR = path.resolve(__dirname, 'dist');
        var SRC_DIR = path.resolve(__dirname, 'src');

        var config = {
            entry: SRC_DIR + '/app/index.js',
            output: {
                path: DIST_DIR + '/app',
                filename: 'bundle.js',
                publicPath: '/app/'
            },
            module: {
                loaders: [{
                    test: /\.js?/,
                    include: SRC_DIR,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'env', 'stage-2']
                    }
                }]
            }
        };

        module.exports = config;
    ```

8. Edit the "package.json" file and enter below content after "main" key in that json file.

    ```json
        "scripts": {
            "start": "npm run build",
            "build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot",
            "build:prod": "webpack -p && copy src/index.html dist/index.html"
        },
    ```

9. fire "npm start" command in terminal/cmd. then you will see "Project is running at http://localhost:8080/". Now fire this url in browser address bar and you will see your project up and running.

--------------------------------------

MORE INFORMATION:

- --save-dev : It means only use these dependancies on DEV server do not deploy on PROD.
- --save : Install PROD dependancies and deploy on PROD
- webpack -d : means run this webpack in DEV server.
- webpack -p : means run this webpack part in PROD server.