import React from 'react'
import Joke from './Joke'
import jokesData from "./jokesData"

function Footer() {
  const JokeComponents = jokesData
  .filter( filteredjoke => filteredjoke.question)
  .map(joke => 
    <Joke key={joke.id} question={joke.question} punchline={joke.punchLine} /> 
  )
  
  return (
    <div>
      {JokeComponents}
      <footer>
        <h4 className="onlyme">Hey Mate I'm the footer</h4>
      </footer>
    </div>
  )
}

export default Footer