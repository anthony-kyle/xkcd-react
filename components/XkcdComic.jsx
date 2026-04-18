'use client'

import React, { useState } from 'react'

const XkcdComic = (props) => {
  const comic = props.comic
  const [numValue, setValue] = useState(comic.num)
  const [transClass, setClass] = useState('hidden')
  const [buttonClass, setButton] = useState()

  return (
    <div id="comic" className={props.visibility}>
      <h1>{comic.title}</h1>
      <h2>
        Comic:{' '}
        <input
          id="comicInput"
          type="number"
          min="1"
          value={numValue}
          onChange={(e) => {
            setValue(Number(e.target.value))
          }}
        />
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            const id = document.querySelector('#comicInput').value
            props.search(id)
          }}
        >
          <i className="fas fa-search" />
        </a>{' '}
        | Posted: {comic.day}/{comic.month}/{comic.year}
      </h2>
      <img
        src={comic.img}
        alt={comic.alt}
        onLoad={() => {
          props.loadHandler()
          setValue(comic.num)
        }}
      />
      <p>{comic.alt}</p>
      {comic.transcript != '' && (
        <>
          <button
            type="button"
            onClick={() => {
              setClass('')
              setButton('hidden')
            }}
            className={buttonClass}
          >
            Show Transcript
          </button>
          <div className={`transcript ${transClass}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setClass('hidden')
                setButton('')
              }}
            >
              <i className="fas fa-times-circle" />
            </a>
            {comic.trnsTitle && <h2>{comic.trnsTitle}</h2>}

            {comic.transcript.split('\n').map((i, key) => {
              return <p key={key}>{i}</p>
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default XkcdComic
