import React, { Component } from 'react'
import Conditional from './Conditional'

class ConditionalApp extends Component {
  constructor() {
    super()
    this.state = {
       isLoading: true,
       unreadMsg: ['a','b','c']
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading:false
      })
    },1500)
  }
  render() {
    return (
      <div>
        {this.state.isLoading ? <h1>Loading...</h1>: <Conditional /> }
        {/* && checks first if true then displays 2nd by default */}
        {this.state.unreadMsg.length > 0 && <h2>You have {this.state.unreadMsg.length} Unread Messages</h2>}
      </div>
    )
  }
}

export default ConditionalApp


