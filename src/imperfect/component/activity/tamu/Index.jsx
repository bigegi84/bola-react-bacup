import React,{Component} from "react"
import ArticleList from '../../list/ArticleList'
import ApiHelper from "../../../../helper/ApiHelper";
import {Observer} from "mobx-react/custom.module";
import mobxStore from "../../../../mobx/mobxStore";
import {Link} from "react-router-dom";
import TampilanHelper from "../../../../helper/TampilanHelper";
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
            const url='/tamu/';
            const halTerakhir=mobxStore.tamuArtikelPaginasi.last_page;
            const hal=this.props.match.params.hal;
            const sebelumView=TampilanHelper.ambilTampilanSebelumnya(url,hal);
            const lanjutView=TampilanHelper.ambilTampilanLanjut(url,hal,halTerakhir);
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