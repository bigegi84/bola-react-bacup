import React from 'react'
import Script from "react-load-script";
import {Observer} from "mobx-react";
import {Link} from "react-router-dom";
import mobxStore from "../../../mobx/mobxStore";
import BarSisi from "./tampilan/BarSisi";
import Navigasi from "./tampilan/Navigasi";
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
          <div className="8u">
            <section className="box">
              <div className="row">
                <div className="12u">
                  <div className="row">
                    <div className="8u">
                      <h3
                        style={{}}
                      >
                        <b>
                          Left &amp; Right
                        </b>
                      </h3>
                      <div
                        className="row"
                      >
                        <div
                          className="5u"
                        >
                          <h4
                            style={{textAlign:'end'}}
                          >oleh: gilangegi</h4>
                        </div>
                        <div
                          className="3u"
                        >
                          <span className="image fit"><img src="/tema/html5up-alpha/images/pic04.jpg" alt=""/></span>
                        </div>
                      </div>
                    </div>
                    <div className="4u">
                      <h5
                        style={{textAlign:'end'}}
                      >
                        2 menit yang lalu.
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="12u">
                  <div className="row">
                    <p style={{textAlign:'justify'}}>
                <span className="image featured">
                  <img src="/tema/html5up-alpha/images/pic04.jpg" alt=""/>
                </span>
                      Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="12u"
                >
                  <p
                    style={{textAlign:'justify'}}
                  >Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae lorem ipsum adipiscing ac. Vivamus ornare laoreet odio vis praesent.</p>
                </div>
              </div>
              <div className="row">
                <div
                  className="12u"
                >
                  <ul
                    style={{
                      textAlign:'end'
                  }}
                    className="icons">
                    <li>
                      <a href="#"
                         className="icon fa-check-circle">
                        <h5><b>120</b></h5>
                      </a>
                    </li>
                    <li
                      style={{verticalAlign:'top'}}
                    >
                      <a href="#" className="icon fa-eye">
                        <h5><b>120</b></h5>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="box">
              <div
                className="row"
              >
                <div
                  className="12u"
                >
                  <h4>Halaman: 1</h4>
                  <ul className="actions fit">
                    <li><a href="#" className="button special fit">Sebelumnya</a></li>
                    <li><a href="#" className="button fit">Selanjutnya</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
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