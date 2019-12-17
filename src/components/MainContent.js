import React from 'react'

function MainContent(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  const styleval ={
    fontSize: 40,
    backgroundColor: 'purple'
  }
  if(hours < 12) {
    timeOfDay = 'Morning'
    styleval.color = 'yellow'
  }
  else {
    timeOfDay = 'Night'
    styleval.color = 'gray'
  }
  
  return(
    <h1 style={styleval}>Good {timeOfDay}</h1>
  )
}

export default MainContent