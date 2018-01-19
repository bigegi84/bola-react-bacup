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
import {Link} from "react-router-dom";
export default class Index extends Component {
  componentWillMount(){
    ApiHelper.getTamuArtikelSemuaPaginasi(this.props.match.params.hal);
  }
  componentWillReceiveProps(nextProps){
    if(this.props.match.params.hal!==nextProps.match.params.hal)
      ApiHelper.getTamuArtikelSemuaPaginasi(nextProps.match.params.hal);
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
    const page=parseInt(this.props.match.params.hal);
    return (
      <div>
        <Observer>
          {()=>{
            const lanjut_hal=page+1;
            let lanjut=true;
            if(page>=mobxStore.tamuArtikelPaginasi.last_page){
              lanjut=false
            }
            let lanjutView=(
              <a className="disabled button big next">
                Next Page
              </a>
            );
            if(lanjut){
              lanjutView=(
                <Link
                  className="button big next"
                  to={"/tamu/"+lanjut_hal}
                  replace
                >
                  Next Page
                </Link>
              )
            }
            const sebelum_hal=page-1;
            let sebelum=true;
            if(page===1){
              sebelum=false
            }
            let sebelumView=(
              <a className="disabled button big previous">
                Previous Page
              </a>
            );
            if(sebelum){
              sebelumView=(
                <Link
                  className="button big previous"
                  to={"/tamu/"+sebelum_hal}
                  replace
                >
                  Previous Page
                </Link>
              )
            }
            return(
              <div>
                <ArticleList data={mobxStore.tamuArtikelPaginasi.data}/>
                <ul className="actions pagination">
                  <li>
                    {sebelumView}
                  </li>
                  <li>
                    {lanjutView}
                  </li>
                </ul>
              </div>
            )
          }}
        </Observer>
      </div>
    )
  }
};