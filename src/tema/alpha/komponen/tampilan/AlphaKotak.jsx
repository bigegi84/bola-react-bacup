import React from 'react'
import AlphaKolom from "./AlphaKolom";
class AlphaKotak extends React.Component{
  render(){
    return(
      <section className="box">
        <div className="row">
          <div className="12u">
            {this.props.children}
          </div>
        </div>
      </section>
    )
  }
}
export default AlphaKotak