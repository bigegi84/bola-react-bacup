import React from 'react'
import Tindakan from "./Tindakan";
import TombolPasSpesial from "./TombolPasSpesial";
class TindakanLis extends React.Component{
  render(){
    let lis=this.props.lis;
    lis=lis.map((item, index) => {
      return (
        <Tindakan
          key={index}
        >
          <TombolPasSpesial
            key={index}
          >
            {item}
          </TombolPasSpesial>
        </Tindakan>
      )
    });
    return(
      <ul className="actions vertical">
        {lis}
      </ul>
    )
  }
}
export default TindakanLis