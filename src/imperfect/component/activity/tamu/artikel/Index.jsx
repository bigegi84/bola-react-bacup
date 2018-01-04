import React,{Component} from "react"
import {Observer} from "mobx-react/custom.module";
import ArtikelSatu from "../../../view/ArtikelSatu";
import mobxStore from "../../../../../mobx/mobxStore";
import ApiHelper from "../../../../../json/ApiHelper";
export default class Index extends Component {
  componentWillMount(){
    ApiHelper.tamuArtikelSatu('slug',this.props.match.params.slug)
  }
  render() {
    return (
      <Observer>
        {()=>{
          return(
            <ArtikelSatu
              data={mobxStore.tamuArtikelSatu}
            />
          )
        }}
      </Observer>
    )
  }
};