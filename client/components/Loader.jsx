import React from 'react'

const Loader = (props) => {
  const comic = props.comic
  return (
   <div id="loader" className={props.visibility}>
     <img src="/xkcd-react/images/39.gif" alt="loading" />
   </div>
  )
}

export default Loader
