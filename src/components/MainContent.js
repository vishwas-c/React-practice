import React from 'react'

function MainContent(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if(hours < 12) {
    timeOfDay = 'Morning'
  }
  else {
    timeOfDay = 'Night'
  }
  const styleval ={
    color: 'turquoise', 
    fontSize: 40,
    backgroundColor: 'purple'
  }
  return(
    <h1 style={styleval}>Good {timeOfDay}</h1>
  )
}

export default MainContent