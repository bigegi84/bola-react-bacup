import React from "react";
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
    this.getJudul=this.getJudul.bind(this);
    this.update=this.update.bind(this);
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
  update() {
  }
  componentDidMount(){
    this.loadData()
  }
  loadData(){
    this.getDeskripsi()
  }
  getJudul(){
    fetch(Url+'tamu/variabel/'+'Judul%20Web',
      {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((r) => {
        r=r.data;
        this.setState({judul:r});
      })
      .catch((error) => {
        console.error(error);
      });
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
    console.log(this.state.judul)
    return(
      <div id="wrapper">
        <Header/>
        <div id="main">
          {this.props.children}
        </div>
        <section id="sidebar">
          <section id="intro">
            <header>
              <LoginNav
                handler={this.handleClick}
                isLogin={localStorage.getItem("token")!==""}
              />
              <h2
              >
                {this.state.judul.nilai}
              </h2>
              <p>{this.state.deskripsi.nilai}</p>
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
            <p className="copyright">&copy; Untitled. Design: <a href="http://html5up.net">HTML5 UP</a>. Images: <a href="http://unsplash.com">Unsplash</a>.</p>
          </section>

        </section>
      </div>
    )
  }
}
const mapStateToProps=(state,ownProps)=>({
  token: getLocalStorage("token")
});
// export default connect(
//   mapStateToProps
// )(ImperfectNav);
export default ImperfectNav;