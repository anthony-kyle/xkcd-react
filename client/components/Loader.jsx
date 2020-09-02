import React from 'react'

const Loader = (props) => {
  console.log(props)
  const comic = props.comic
  return (
   <div id="loader" className={props.visibility}>
     <img src="/images/39.gif" alt="loading" />
   </div>
  )
}

export default Loader
