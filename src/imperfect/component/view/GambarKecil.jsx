import React from 'react'
class GambarKecil extends React.Component{
  render(){
    return(
      <div className="6u$">
        <span className="image fit">
          <img
            className="post"
            src={this.props.src}
            alt="coba"
          />
        </span>
      </div>
    )
  }
}
export default GambarKecil