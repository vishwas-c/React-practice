import React from 'react'

function MainContent(){
  const date = new Date()

  return(
  <h1>It is currently {date.getHours()%12} O'clock</h1>
  )
}

export default MainContent