import React,{Component} from "react"
import {Observer} from "mobx-react/custom.module";
import ArtikelSatu from "../../../view/ArtikelSatu";
import mobxStore from "../../../../../mobx/mobxStore";
import ApiHelper from "../../../../../helper/ApiHelper";
export default class Index extends Component {
  componentWillMount(){
    this.loadData()
  }
  loadData(pertama=true){
    ApiHelper.tamuArtikelSatu('slug',this.props.match.params.slug,pertama)
  }
  render() {
    return (
      <Observer>
        {()=>{
          return(
            <ArtikelSatu
              data={mobxStore.tamuArtikelSatu}
              klikSuka={()=>{
                ApiHelper.tamuArtikelSatuSuka(
                  'slug',
                  this.props.match.params.slug,
                  ()=>{
                    this.loadData(false)
                  }
                )
              }}
            />
          )
        }}
      </Observer>
    )
  }
};