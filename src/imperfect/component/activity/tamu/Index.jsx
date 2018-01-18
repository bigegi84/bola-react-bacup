import React,{Component} from "react"
import axios from 'axios'
import {Url} from '../../../../config'
import ArticleList from '../../list/ArticleList'
import TextLabel from '../../form/TextLabel'
import Button from "../../view/Button";
import stateBola from "../../../../index";
import ApiHelper from "../../../../json/ApiHelper";
import {Observer} from "mobx-react/custom.module";
import mobxStore from "../../../../mobx/mobxStore";
export default class Index extends Component {
  componentWillMount(){
    ApiHelper.getTamuArtikelSemuaPaginasi(this.props.match.params.hal);
  }
  // componentWillMount(){
  //   this.loadData();
  //   const interval = setInterval(this.loadData,30000);
  //   this.setState({interval: interval});
  // }
  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }
  render() {
    return (
      <div>
        <Observer>
          {()=>{
            return(
              <ArticleList data={mobxStore.tamuArtikelPaginasi.data}/>
            )
          }}
        </Observer>
      </div>
    )
  }
};