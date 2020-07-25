import React from 'react'
import ReactDom from 'react-dom'
import './index.css';

function MyApp(){
  return(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  )
}

ReactDom.render(
  <MyApp/>
  ,
  document.getElementById("root")
)
