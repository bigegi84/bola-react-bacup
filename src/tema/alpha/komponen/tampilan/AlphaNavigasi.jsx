import React from 'react'
import LisTidakBerurutan from "./LisTidakBerurutan";
import AlphaLis from "./AlphaLis";
import ApiHelper from "../../../../helper/ApiHelper";
import {Observer} from "mobx-react/custom.module";
import mobxStore from "../../../../mobx/mobxStore";
import {Link} from "react-router-dom";
class AlphaNavigasi extends React.Component{
  componentWillMount(){
    ApiHelper.tamuMenu()
  }
  render(){
    return(
      <Observer>
        {()=>{
          let data=mobxStore.menu;
          let lis;
          const menuUrl='/tamu/menu/';
          lis=data.map((item,index)=>{
            return(
              <AlphaLis
                key={index}
              >
                <Link
                  to={menuUrl+item.slug+'/1'}
                >
                  {item.nama}
                </Link>
              </AlphaLis>
            )
          });
          return(
            <nav id="nav">
              <LisTidakBerurutan>
                {lis}
              </LisTidakBerurutan>
            </nav>
          )
        }}
      </Observer>
    )
  }
}
export default AlphaNavigasi