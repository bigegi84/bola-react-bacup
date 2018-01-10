import React,{Component} from "react"
import ArticleList from '../../../list/ArticleList'
import ApiHelper from "../../../../../json/ApiHelper";
import mobxStore from "../../../../../mobx/mobxStore";
import {Observer} from "mobx-react/custom.module";
class Index extends Component {
  componentWillMount(){
    ApiHelper.getTamuMenuArtikelPaginasi(this.props.match.params.slug);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.slug!==nextProps.match.params.slug) {
      ApiHelper.getTamuMenuArtikelPaginasi(nextProps.match.params.slug);
    }
  }
  render() {
    return (
      <Observer>
        {()=>{
          return(
            <ArticleList data={mobxStore.tamuMenuArtikelPaginasi.data}/>
          )
        }}
      </Observer>
    )
  }
}
export default Index