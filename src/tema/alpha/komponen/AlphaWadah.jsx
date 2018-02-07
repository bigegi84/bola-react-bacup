import React from 'react'
import BarSisi from "./tampilan/BarSisi";
import {Observer} from "mobx-react/custom.module";
import {Link} from "react-router-dom";
import mobxStore from "../../../mobx/mobxStore";
import AlphaNavigasi from "./tampilan/AlphaNavigasi";

const gaya={
  kepala:{
    background:'#999'
  }
}
class AlphaWadah extends React.Component{
  render(){
    return(
      <div id="page-wrapper">
        {/*<!-- Header -->*/}
        <header
          id="header"
          style={gaya.kepala}
        >
          <h1>
            <Observer>
              {()=>{
                return (
                  <Link
                    to={'/tamu/artikel/semua/1'}
                  >
                    {mobxStore.judul.nilai}
                  </Link>
                )
              }}
            </Observer>
          </h1>
          <AlphaNavigasi/>
        </header>
        <section id="main" className="container">
          <div className="row">
            <BarSisi/>
            {this.props.children}
          </div>
        </section>
        {/*<!-- Footer -->*/}
        <footer id="footer">
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
            <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li>
            <li><a href="#" className="icon fa-google-plus"><span className="label">Google+</span></a></li>
          </ul>
          <ul className="copyright">
            <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </footer>
      </div>
    )
  }
}
export default AlphaWadah