import React from 'react'
class AlphaGambarPas extends React.Component{
  render(){
    const sumber=this.props.sumber;
    return(
      <span className="image fit">
        <img
          src={sumber}
          alt=""
        />
      </span>
    )
  }
}
export default AlphaGambarPas