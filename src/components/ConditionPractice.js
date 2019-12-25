import React,{Component} from 'react'

class ConditionPractice extends Component {
  constructor() {
    super()
  
    this.state = {
       loggedin: true
    }
    this.toggleLogin = this.toggleLogin.bind(this)
  }
  toggleLogin() {
    this.setState(prevState => {
      return {
        loggedin : !prevState.loggedin
      }
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.toggleLogin}>{this.state.loggedin ? "Log Out" : "Log In"}</button>
        <h2>{this.state.loggedin ? "Logged In" : "LogOut"}</h2>
      </div>
    )
  }
  
}

export default ConditionPractice