import React from 'react'
import { Link } from 'react-router-dom'

const Ashutoshbhardwaj = () => {

  const LinkStyle={
    color:"white",
    textDecoration:"none"
  }
  
  return (
    <div style={{height:"89.9vh",display:"flex",alignItems:'center',justifyContent:"space-around",backgroundColor:"black"}}>
    <div>
    <h2 style={LinkStyle}>Check out my GitHub profile for more projects</h2>
    <h1 style={LinkStyle}>GitHub link :- <a href="https://github.com/4shutoshbhardwaj" style={LinkStyle}><h1>4shutoshbhardwaj</h1></a></h1>
    </div>
    </div>
  )
}

export default Ashutoshbhardwaj