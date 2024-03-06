import React from "react"
import './Display.css'


const Display = (props) => {

  const {title, number, date} = props

  return <div className="display">
    <div>
      <h2>Title: <span>{title}</span></h2>
    </div>
    <div>
      <h1>Number: <span>{number}</span></h1>
    </div>
    <div>
      <p>Date: <span>{date.toLocaleString('en-US', {'month': 'long'})}</span></p>
    </div>
  </div>
}


export default Display