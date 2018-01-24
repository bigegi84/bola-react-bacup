import React from 'react'
import LisTidakBerurutan from "./LisTidakBerurutan";
import AlphaLis from "./AlphaLis";
import ApiHelper from "../../../../helper/ApiHelper";
import {Observer} from "mobx-react/custom.module";
import mobxStore from "../../../../mobx/mobxStore";
class Navigasi extends React.Component{
  componentWillMount(){
    ApiHelper.tamuMenu()
  }
  render(){
    return(
      <nav id="nav">
        <Observer>
          {()=>{
            let lis=mobxStore.menu;
            lis=lis.map((item,index)=>{
              return(
                <AlphaLis
                  key={index}
                >
                  <a>{item.nama}</a>
                </AlphaLis>
              )
            });
            lis.push(
              <AlphaLis
                key={lis.length}
              >
                <a>Halo</a>
              </AlphaLis>
            );
            return(
              <LisTidakBerurutan>
                {lis}
              </LisTidakBerurutan>
            )
          }}
        </Observer>
      </nav>
    )
  }
}
export default Navigasi