import React from 'react'

function Student(props) {
  return (
    <div >
        <h1>Student Information</h1>
        <h2> {props.name}</h2>
        <p>COURSE {props.branch}</p>
        <p>MARKS {props.marks}</p>
      
    </div>
  )
}

export default Student
