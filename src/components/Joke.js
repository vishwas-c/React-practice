import React from 'react'


function Joke (props){
  // console.log(props)
  return(
   
    <div>
      <h2 style={{display: props.question?'block':'none'}}>Question:{props.question }</h2>
      <p>Answer: {props.punchline}</p>
    </div>
  )
}

export default Joke