import React from 'react'
import ReactDOM from 'react-dom'


function MyInfo() {
  return (
    <div>
      <h1>Vishwas</h1>
      <p>About myself.Haha</p>
      <ol>
        <li>Hawii</li>
        <li>Bahamas</li>
        <li>London</li>
      </ol>
      <ul>
        <li>Mahn</li>
        <li>I'm running out of options</li>
        <li>Ok. Byeee</li>
      </ul>
    </div>
  )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'))