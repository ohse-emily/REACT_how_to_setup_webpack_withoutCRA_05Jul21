// const React = require('react') 
// const Component = React
// const ReactDOM = require('react-dom')
// const LoginBox = require('./loginBox.jsx')

// import 의 장점 변수 두가지 설정 가능 
// import는 babel이 한 번  읽고 처리됨 (require는 node.js가 )

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import LoginBox from './loginBox'

class App extends Component {
    render() {
        return (
            <>
                <div> Hello asdf! </div>
                <LoginBox />
            </>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)