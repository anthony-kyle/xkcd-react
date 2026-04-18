'use client'

import React from 'react'
import { getCurrentComic, getComicById } from '@/lib/xkcd'
import XkcdComic from '@/components/XkcdComic'
import Loader from '@/components/Loader'

class Xkcd extends React.Component {
  state = {
    maxNum: 0,
    comicVisible: false,
  }

  componentDidMount() {
    this.currentComicData()
    this.hideComic()
  }

  currentComicData = () => {
    this.hideComic()
    getCurrentComic()
      .then((comic) => {
        this.setState({
          comic,
          maxNum: comic.num,
        })
        return comic
      })
      .catch(() => {})
  }

  firstComic = () => {
    this.hideComic()
    getComicById(1)
      .then((comic) => {
        this.setState({
          comic,
        })
        return comic
      })
      .catch(() => {})
  }

  nextComic = () => {
    const num = this.state.comic.num
    if (num < this.state.maxNum) {
      this.hideComic()
      getComicById(num + 1)
        .then((comic) => {
          this.setState({
            comic,
          })
          return comic
        })
        .catch(() => {})
    }
  }

  prevComic = () => {
    const num = this.state.comic.num
    if (num > 1) {
      this.hideComic()
      getComicById(num - 1)
        .then((comic) => {
          this.setState({
            comic,
          })
          return comic
        })
        .catch(() => {})
    }
  }

  randomComic = () => {
    this.hideComic()
    const limit = Number(this.state.maxNum)
    const num = Math.ceil(Math.random() * limit)
    getComicById(num)
      .then((comic) => {
        this.setState({
          comic,
        })
        return comic
      })
      .catch(() => {})
  }

  hideComic = () => {
    this.setState({
      comicVisible: false,
    })
  }

  showComic = () => {
    this.setState({
      comicVisible: true,
    })
  }

  comicSearch = (id) => {
    const max = this.state.maxNum
    const current = this.state.comic.num
    const n = Number(id)
    if (n > 0 && n <= max && n !== current) {
      this.hideComic()
      getComicById(n)
        .then((comic) => {
          this.setState({
            comic,
          })
          return comic
        })
        .catch(() => {})
    }
  }

  render() {
    const loaderVisibility = this.state.comicVisible === true ? 'hidden' : ''
    const comicVisibility = this.state.comicVisible === true ? '' : 'hidden'
    return (
      <>
        <Loader visibility={loaderVisibility} />
        {this.state.comic && (
          <XkcdComic
            comic={this.state.comic}
            visibility={comicVisibility}
            loadHandler={this.showComic}
            max={this.state.maxNum}
            search={this.comicSearch}
          />
        )}
        <div id="nav">
          <div className="container">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                this.firstComic()
              }}
            >
              <i className="fas fa-fast-backward" /> First Comic
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                this.prevComic()
              }}
            >
              <i className="fas fa-step-backward" /> Previous
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                this.randomComic()
              }}
            >
              <i className="fas fa-random" /> Random Comic <i className="fas fa-random" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                this.nextComic()
              }}
            >
              Next <i className="fas fa-step-forward" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                this.currentComicData()
              }}
            >
              Last Comic <i className="fas fa-fast-forward" />
            </a>
          </div>
        </div>
      </>
    )
  }
}

export default Xkcd
