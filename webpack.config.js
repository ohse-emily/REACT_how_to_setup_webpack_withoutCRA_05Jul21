const path = require('path')
const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')  //추가 
const webpack = require('webpack')


module.exports = {  //module.exports부터 무조건 쓰기 ! 
    name:'firstWebpack', //webpack의 이름  / 안적어도 된다. 
    mode:'development', //어떤 용도로 개발을 할 것이냐 
    // development -> 개발용 
    // production -> 배포 용!
    devtool:'eval', 
    // eval -> 개발용 
    // hidden-source-map -> 배포용 

    resolve:{
        extensions:['.js', '.jsx']
    },

    // 입력받을 내용들 
    entry:{
        app:['./index.jsx']
    },

    // module을 통해 babel or sth 통해 해석해야하는구나 알도록 설정
    // 외부파일 가져와서 읽을 때 사용하는 
    // babel은 js 뿐만 아니라 다른 파일도 읽을 수 있음 -> 규칙 정해주기
    module:{
        rules:[{
            //확장자가 .jsx 이냐 .js이냐 - 적합하면 실행하겟다. 
            test:/\.jsx?$/, 
            //js 실행할 때 babel 쓸꺼야 ! 
            loader:'babel-loader', // webpack - babel 이해해주는 아이
            // babel 내용 바꾸고 싶을 때 ex) plugin, preset..
            options:{
                presets:[
                    ['@babel/preset-env', {
                        targets:{
                                //여기에 link 에 나온 내용들 넣어주기 
                            browsers:['>5% in KR','last 2 chrome versions']
                        },
                        debug:true,
                    }], 
                    '@babel/preset-react'
                ],
                plugins:[
                    'react-refresh/babel'
                ]
            }
            
        }]
    },
    //webpack이 구동이 될 때 아래 plugins를 무조건 실행하겠다. 
    plugins:[
        new webpackPlugin(),
        new webpack.LoaderOptionsPlugin({debug:true})
    ],

    // 내보낼 내용들 
    // 현재 디렉토리 + dist까지 
    output:{
        path:path.join(__dirname,'dist'),
        filename:'app.js', 
        //정적 파일로 바꾼다. 
        publicPath:'/dist'
    },

    // 실행할 때 
    devServer:{
        publicPath:'/dist',
        hot:true, // hot reload 
    }
}