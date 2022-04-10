import React from 'react'

function Title(props) {

  return (
    <>
        {
            props.heading === "h1" && <h1>{props.title}</h1>
        }
        {
            props.heading === "h2" && <h2>{props.title}</h2>
        }
        {
            props.heading === "h3" && <h3>{props.title}</h3>
        }
        </>
  )
}

export default Title