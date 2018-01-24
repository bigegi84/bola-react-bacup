import React from 'react'
import {Observer} from "mobx-react/custom.module";
import ApiHelper from "../../../../helper/ApiHelper";
import TindakanLis from "./TindakanLis";
import mobxStore from "../../../../mobx/mobxStore";
class BarSisi extends React.Component{
  render(){
    return(
      <div className="4u 12u$(small)">
        <section className="box">
          <h3>Menu</h3>
          <hr/>
          <div className="row">
            <div className="12u 12u(narrower) 12u$(mobilep)">
              <Observer>
                {()=>{
                  const lis=mobxStore.menu.map((item,index)=>{
                    return item.nama
                  });
                  return(
                    <TindakanLis
                      lis={lis}
                    />
                  )
                }}
              </Observer>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default BarSisi