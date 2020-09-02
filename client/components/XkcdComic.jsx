import React from 'react'

const XkcdComic = (props) => {
  const comic = props.comic
  return (
   <div id="comic" className={props.visibility}>
     <h1>{comic.title}</h1>
     <h2>Comic: <input id="comicInput" type="number" min="1" defaultValue={comic.num} /><a href="#" onClick={() => { const id = document.querySelector('#comicInput').value;props.search(id)}}><i className="fas fa-search"></i></a> | Posted: {comic.day}/{comic.month}/{comic.year}</h2>
     <img src={comic.img} alt={comic.alt} onLoad={props.loadHandler} />
     <p>{comic.alt}</p>
   </div>
  )
}

export default XkcdComic
