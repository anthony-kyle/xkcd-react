import React from "react";
import { getCurrentComic, getFirstComic, getComicById } from "../apis/xkcd";
import XkcdComic from "./XkcdComic";
import Loader from './Loader'

class Xkcd extends React.Component {
  state = {
    maxNum: 0,
    comicVisible: false, 
  };

  componentDidMount() {
    this.currentComicData();
    this.hideComic()
  }

  currentComicData = () => {
    this.hideComic()
    getCurrentComic().then((comic) => {
      this.setState({
        comic: comic,
        maxNum: comic.num,
      });
      return comic;
    });
  };

  firstComic = () => {
    this.hideComic()
    getComicById(1).then((comic) => {
      this.setState({
        comic: comic,
      });
      return comic;
    });
  };

  nextComic = () => {
    const num = this.state.comic.num;
    if (num < this.state.maxNum) {
      this.hideComic()
      getComicById(num + 1).then((comic) => {
        this.setState({
          comic: comic
        });
        return comic;
      });
    }
  };

  prevComic = () => {
    const num = this.state.comic.num;
    if (num > 1) {
      this.hideComic()
      getComicById(num - 1).then((comic) => {
        this.setState({
          comic: comic
        });
        return comic;
      });
    }
  };

  randomComic = () => {
    this.hideComic()
    const limit = Number(this.state.maxNum)
    const num = Math.ceil(Math.random() * limit)
    getComicById(num).then((comic) => {
      this.setState({
        comic: comic
      });
      return comic;
    });
  };

  hideComic = () => {
    this.setState({
      comicVisible: false
    })
  }

  showComic =()=>{
    this.setState({
      comicVisible: true
    })
  }

  comicSearch = (id) => {
    const max = this.state.maxNum
    const current = this.state.comic.num
    if (id > 0 && id <= max && id !== current){
      this.hideComic()
      getComicById(id).then((comic) => {
        this.setState({
          comic: comic
        });
        return comic;
      });
    }
  }


  render() {
    const loaderVisibility = this.state.comicVisible === true ? 'hidden' : ''
    const comicVisibility = this.state.comicVisible === true ? '' : 'hidden'
    return (
      <>
        <Loader visibility={loaderVisibility} />
        {this.state.comic && <XkcdComic comic={this.state.comic} visibility={comicVisibility} loadHandler={this.showComic} max={this.state.maxNum} search={this.comicSearch}/>}
        <div id="nav">
          <div className="container">
            <a href="#" onClick={this.firstComic}>
              <i className="fas fa-fast-backward"></i> First Comic
            </a>
            <a href="#" onClick={this.prevComic}>
              <i className="fas fa-step-backward"></i> Previous
            </a>
            <a href="#" onClick={this.randomComic}>
            <i className="fas fa-random"></i> Random Comic <i className="fas fa-random"></i>
            </a>
            <a href="#" onClick={this.nextComic}>
              Next <i className="fas fa-step-forward"></i>
            </a>
            <a href="#" onClick={this.currentComicData}>
              Last Comic <i className="fas fa-fast-forward"></i>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Xkcd;
