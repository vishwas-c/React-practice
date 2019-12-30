import React, { Component } from 'react'

class APIPractice extends Component{
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {

      }
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    fetch('https://swapi.co/api/people/1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          character: data
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.loading ? 'loading.... ': this.state.character.name}

      </div>
      
    )
  }  
}

export default APIPractice
