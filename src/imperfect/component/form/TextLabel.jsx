import React from 'react'
export default class TextLabel extends React.Component{
  render(){
    const panjang=this.props.panjang;
    return(
      <div>
        <h5>{this.props.title}</h5>
        <input
          value={this.props.value}
          type="text"
          name={this.props.name}
          maxLength={panjang}
          onChange={(e)=>this.props.change(e)}
        />
        <br/>
      </div>
    )
  }
}