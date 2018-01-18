import React from 'react'
const css={
  text:{
    resize:'vertical'
  }
};
export default class TextAreaLabel extends React.Component{
  render(){
    const panjang=this.props.panjang;
    return(
      <div>
        <h5>{this.props.title}</h5>
        <textarea
          cols='60'
          rows='8'
          maxLength={panjang}
          style={css.text}
          name={this.props.name}
          onChange={(e)=>this.props.change(e)}
          value={this.props.value}
        />
        <br/>
      </div>
    )
  }
}