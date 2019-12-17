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

  return(
<h1>Good {timeOfDay}</h1>
  )
}

export default MainContent