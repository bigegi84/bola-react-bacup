import React,{Component} from "react"
import ArticleList from '../../../list/ArticleList'
import ApiHelper from "../../../../../helper/ApiHelper";
import mobxStore from "../../../../../mobx/mobxStore";
import {Observer} from "mobx-react/custom.module";
import {Link} from "react-router-dom";
import TampilanHelper from "../../../../../helper/TampilanHelper";
class Index extends Component {
  componentWillMount(){
    ApiHelper.getTamuMenuArtikelPaginasi(this.props.match.params.slug,this.props.match.params.page);
  }
  componentWillReceiveProps(nextProps){
    if(
      this.props.match.params.slug===nextProps.match.params.slug&&
      this.props.match.params.page===nextProps.match.params.page
    ){

    }else{
      ApiHelper.getTamuMenuArtikelPaginasi(nextProps.match.params.slug,nextProps.match.params.page);
    }
  }
  render() {
    return (
      <Observer>
        {()=>{
          const slug=this.props.match.params.slug;
          const url='/tamu/menu/'+slug;
          const hal=this.props.match.params.page;
          const halTerakhir=mobxStore.tamuMenuArtikelPaginasi.last_page;
          const sebelumView=TampilanHelper.ambilTampilanSebelumnya(url,hal);
          const lanjutView=TampilanHelper.ambilTampilanLanjut(url,hal,halTerakhir);
          return(
            <div>
              <ArticleList data={mobxStore.tamuMenuArtikelPaginasi.data}/>
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
    )
  }
}
export default Index