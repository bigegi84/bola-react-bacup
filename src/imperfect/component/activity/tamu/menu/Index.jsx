import { connect } from 'react-redux'
import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../../config'
import ArticleList from '../../../list/ArticleList'
import TextLabel from '../../../form/TextLabel'
import Button from "../../../view/Button";
import MenuJson from "../../../../../json/MenuJson";
import ArtikelJson from "../../../../../json/ArticleJson";
import {filterDinamis, setDinamis} from "../../../../../redux/actions/index";
import ApiHelper from "../../../../../json/ApiHelper";
import {observer} from "mobx-react";
import mobxStore from "../../../../../mobx/mobxStore";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      komen:{},
      interval:{}
    };
    this.loadData=this.loadData.bind(this);
  }
  componentWillMount(){
    this.loadData(this.props.match.params.slug);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.slug!==nextProps.match.params.slug) {
      this.loadData(nextProps.match.params.slug);
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
      <div>
        <ArticleList data={this.props.store.tamuMenuArtikel}/>
      </div>
    )
  }
}
const View=observer(Index);
class withMobx extends Component{
  render(){
    return(
      <View
        match={this.props.match}
        store={mobxStore}
      />
    )
  }
}
export default withMobx