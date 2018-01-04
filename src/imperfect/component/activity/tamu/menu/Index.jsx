import React,{Component} from "react"
import ArticleList from '../../../list/ArticleList'
import ApiHelper from "../../../../../json/ApiHelper";
import {observer} from "mobx-react";
import mobxStore from "../../../../../mobx/mobxStore";
import {Observer} from "mobx-react/custom.module";
class Index extends Component {
  componentWillMount(){
    ApiHelper.getTamuMenuArtikelPaginasi(this.props.match.params.slug);
    // this.loadData(this.props.match.params.slug);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.slug!==nextProps.match.params.slug) {
      ApiHelper.getTamuMenuArtikelPaginasi(nextProps.match.params.slug);
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state !== nextState;
  // }
  loadData(slug){
    ApiHelper.getTamuMenuArtikel(slug)
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
// const View=observer(Index);
// class withMobx extends Component{
//   render(){
//     return(
//       <View
//         match={this.props.match}
//         store={mobxStore}
//       />
//     )
//   }
// }
export default Index