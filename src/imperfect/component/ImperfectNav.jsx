import React from "react";
import {Observer} from "mobx-react/custom.module";
import Header from "./Header"
import {Url} from "../../config";
import LoginNav from "./nav/LoginNav";
import mobxStore from "../../mobx/mobxStore";
import ApiHelper from "../../helper/ApiHelper";
import AppHistory from "./AppHistory";
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
    AppHistory.push('/tamu/masuk')
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
          <section
            id="menu"
          >
            <section>
              <form className="search" method="get" action="#">
                <input type="text" name="query" placeholder="Search"/>
              </form>
            </section>
            {/*<section>*/}
              {/*<ul className="links">*/}
                {/*<li>*/}
                  {/*<a href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">*/}
                    {/*<h3>Lorem ipsum</h3>*/}
                    {/*<p>Feugiat tempus veroeros dolor</p>*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                  {/*<a href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">*/}
                    {/*<h3>Dolor sit amet</h3>*/}
                    {/*<p>Sed vitae justo condimentum</p>*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                  {/*<a href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">*/}
                    {/*<h3>Feugiat veroeros</h3>*/}
                    {/*<p>Phasellus sed ultricies mi congue</p>*/}
                  {/*</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                  {/*<a href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">*/}
                    {/*<h3>Etiam sed consequat</h3>*/}
                    {/*<p>Porta lectus amet ultricies</p>*/}
                  {/*</a>*/}
                {/*</li>*/}
              {/*</ul>*/}
            {/*</section>*/}
            {/*<section>*/}
              {/*<ul className="actions vertical">*/}
                {/*<li><a href="#" className="button big fit" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Log In</a></li>*/}
              {/*</ul>*/}
            {/*</section>*/}
          </section>
        </section>
      </div>
    )
  }
}
export default ImperfectNav;