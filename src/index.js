import React from 'react'
import ReactDOM from 'react-dom'

function MyList() {
  return (
    <ul><li>no 1</li><li>no 2</li><li>no 3</li></ul>
  )
}


ReactDOM.render( <MyList/>, document.getElementById("root"));