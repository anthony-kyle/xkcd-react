import React from 'react'

class Test extends React.Component {
  render(){
    return (
      <>
      {this.props.fruit.length >0 && this.props.fruit.map((f, i)=> <p key={i} className="f">{f.name}</p>)}
      {this.props.fruit.length == 0 && <p className="nf">No Fruit</p>}
      </>
    )
  }
}

export default Test
