import React from 'react'
import Script from "react-load-script";
import {Observer} from "mobx-react";
import {Link} from "react-router-dom";
import mobxStore from "../../../mobx/mobxStore";
import BarSisi from "./tampilan/BarSisi";
import Navigasi from "./tampilan/Navigasi";
import AlphaRute from "./rute/AlphaRute";
class AlphaHtml extends React.Component{
  state={
    jqueryDimuat:false
  }
  render(){
    const jqueryDimuat=this.state.jqueryDimuat;
    return(
      <html>
      <head>
        <Observer>
          {()=>{
            return (
              <title>
                {mobxStore.judul.nilai}
              </title>
            )
          }}
        </Observer>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->*/}
        <link rel="stylesheet" href="/tema/html5up-alpha/assets/css/main.css" />
        {/*<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->*/}
        </head>
      <body>
      <div id="page-wrapper">

      {/*<!-- Header -->*/}
      <header id="header">
        <h1>
          <Observer>
            {()=>{
              return (
                <a
                >
                  {mobxStore.judul.nilai}
                </a>
              )
            }}
          </Observer>
        </h1>
        <Navigasi/>
      </header>

      {/*<!-- Main -->*/}
      <section id="main" className="container">
        <header>
          <h2>Elements</h2>
          <p>Just an assorted selection of elements.</p>
        </header>
        <div className="row">
          <BarSisi/>
          <AlphaRute/>
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
      {/*<!-- Scripts -->*/}
      <Script
      url="/tema/html5up-alpha/assets/js/jquery.min.js"
      onLoad={() => {
        this.setState({jqueryDimuat:true})
      }}
    />
      {jqueryDimuat?
        (
          <div>
          <Script url="/tema/html5up-alpha/assets/js/jquery.dropotron.min.js">
          </Script>
          <Script url="/tema/html5up-alpha/assets/js/jquery.scrollgress.min.js">
          </Script>
            <Script url="/tema/html5up-alpha/assets/js/skel.min.js"/>
            <Script url="/js/skel-layout.min.js"/>
          <Script
            url="/tema/html5up-alpha/assets/js/util.js"
            onLoad={()=>{
            }}
          >
          </Script>
          {/*<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->*/}
          <Script url="/tema/html5up-alpha/assets/js/main.js"/>
        </div>
        ):'not'}
      </body>
      </html>
    )
  }
}
export default AlphaHtml