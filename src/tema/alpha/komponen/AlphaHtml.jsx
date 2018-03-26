import React from 'react'
import Script from "react-load-script";
import {Observer} from "mobx-react";
import {Link} from "react-router-dom";
import mobxStore from "../../../mobx/mobxStore";
import BarSisi from "./tampilan/BarSisi";
import AlphaRute from "./rute/AlphaRute";
import AlphaWadah from "./AlphaWadah";
class AlphaHtml extends React.Component{
  state={
    jqueryDimuat:false,
    skelDimuat:false
  }
  render(){
    const jqueryDimuat=this.state.jqueryDimuat;
    const skelDimuat=this.state.skelDimuat;
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
        <link rel="stylesheet" href="/css/croppie.css" />
        <link rel="stylesheet" href="/css/alertify.css" />
        {/*<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->*/}
        </head>
      <body>
      {jqueryDimuat?
        (
          <AlphaRute/>
        ):'not'}
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
            {/*<Script url="/tema/html5up-alpha/assets/js/jquery.dropotron.min.js"/>*/}
            <Script url="/tema/html5up-alpha/assets/js/jquery.scrollgress.min.js">
            </Script>
            <Script
              url="/tema/html5up-alpha/assets/js/skel.min.js"
              onLoad={()=>{
                this.setState({skelDimuat:true})
              }}
            />
            {skelDimuat?(
              <Script url="/js/skel-layout.min.js"/>
            ):(<div/>)}
            <Script url="/js/alertify.js"/>
            <Script
              url="/tema/html5up-alpha/assets/js/util.js"
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