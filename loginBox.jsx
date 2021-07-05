const React = require('react')

class LoginBox extends React.Component{
    state={
        userid:'', 
        userpw:''
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})    
    }


    letsubmit = (e) =>{
        console.log(e)
        e.preventDefault()
        this.props.onCreate(this.state)
    }

    render(){
        return(
            <form onSubmit={this.letsubmit}>
                <input 
                    type="text" 
                    placeholder="아이디를 입력해주세요"
                    value={this.state.userid}
                    name="userid"
                    onChange = {this.handleChange}
                />
                <input 
                    type="password" 
                    placeholder="비번 입력해주세요"
                    value={this.state.userpw}  
                    name="userpw"
                    onChange = {this.handleChange}
                />
                <button type="submit">로그인</button>
            </form>
        )
    }
}

module.exports = LoginBox 


