'use client'

import React from 'react'

const Loader = (props) => {
  return (
    <div
      id="loader"
      className={props.visibility}
      role="status"
      aria-live="polite"
      aria-label="Loading comic"
    >
      <svg
        className="loader-throbber"
        viewBox="0 0 64 64"
        width="64"
        height="64"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          stroke="#cdcdcd"
          strokeWidth="5"
        />
        <circle
          cx="32"
          cy="32"
          r="26"
          fill="none"
          stroke="#232323"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="40.8 122.5"
          transform="rotate(-90 32 32)"
        />
      </svg>
    </div>
  )
}

export default Loader
