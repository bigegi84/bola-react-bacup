import React from "react";
import {Observer} from "mobx-react/custom.module";
import Header from "./Header"
import {Link} from "react-router-dom";
import {Url} from "../../config";
import PenulisNav from "./nav/PenulisNav";
import {connect} from "react-redux";
import {getLocalStorage} from "../../redux/actions/index";
import Button from "./view/Button";
import LoginNav from "./nav/LoginNav";
import SingletonDefaultExportInstance from "../../singleton/SingletonDefaultExportInstance";
import Singleton from "../../singleton/Singleton";
import mobxStore from "../../mobx/mobxStore";
import ApiHelper from "../../json/ApiHelper";
import Index from "./list/ArticleList";
const style={
  wrapper:{
    paddingLeft:'10em',
    paddingRight:'10em',
  },
  sidebar:{
    // width:'20em',
    // minWidth:'20em',
  }
}
class ImperfectNav extends React.Component{
  constructor(props){
    super(props);
    this.state={
      pengurusNav:localStorage.getItem("token")!=="",
      masukNav:localStorage.getItem("token")==="",
      deskripsi:{},
      judul:{}
    };
    this.loadData=this.loadData.bind(this);
    this.getDeskripsi=this.getDeskripsi.bind(this);
    this.handleClick=this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(this.props!==nextProps){
      this.setState({
        pengurusNav:localStorage.getItem("token")!=="",
        masukNav:localStorage.getItem("token")==="",
      })
    }
  }
  handleClick = () => {
    localStorage.setItem("token","");
    this.setState({
      pengurusNav:localStorage.getItem("token")!=="",
      masukNav:localStorage.getItem("token")==="",
    });
    window.location.href = "#/tamu/masuk";
  };
  componentDidMount(){
    mobxStore.history=this.props.history;
    this.loadData()
  }
  loadData(){
    this.getDeskripsi();
    ApiHelper.getCopyright()
  }
  getDeskripsi(){
    fetch(Url+'tamu/variabel/'+'Deskripsi%20Web',
      {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((r) => {
        r=r.data;
        this.setState({deskripsi:r});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render(){
    return(
      <div
        style={style.wrapper}
        id="wrapper"
      >
        <Header/>
        <div id="main">
          {this.props.children}
        </div>
        <section
          style={style.sidebar}
          id="sidebar">
          <section id="intro">
            <header>
              <Observer>
                {()=><h2>{mobxStore.judul.nilai}</h2>}
              </Observer>
              <h2>{this.state.judul.nilai}</h2>
              <p>{this.state.deskripsi.nilai}</p>
              <LoginNav
                handler={this.handleClick}
                isLogin={localStorage.getItem("token")!==""}
              />
            </header>
          </section>
          <section id="footer">
            <ul className="icons">
              <li><a className="fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a className="fa-facebook"><span className="label">Facebook</span></a></li>
              <li><a className="fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a className="fa-rss"><span className="label">RSS</span></a></li>
              <li><a className="fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <Observer>
              {()=><p className="copyright">{mobxStore.copyright.nilai}</p>}
            </Observer>
          </section>
        </section>
      </div>
    )
  }
}
export default ImperfectNav;