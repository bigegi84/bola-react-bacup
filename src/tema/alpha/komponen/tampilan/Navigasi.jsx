import React from 'react'
import LisTidakBerurutan from "./LisTidakBerurutan";
import Lis from "./Lis";
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
                <Lis
                  key={index}
                >
                  <a>{item.nama}</a>
                </Lis>
              )
            });
            lis.push(
              <Lis
                key={lis.length}
              >
                <a>Halo</a>
              </Lis>
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