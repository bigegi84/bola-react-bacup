import React from 'react'
import Script from "react-load-script";
import ImperfectRoute from "./ImperfectRoute";
class ImperfectHtml extends React.Component{
  state={
    jqueryDimuat:false
  }
  render(){
    const jqueryDimuat=this.state.jqueryDimuat;
    return(
      <html>
      <head>
        <title>Gilang Pratama Wiguna</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*<!--[if lte IE 8]><script src="/theme/html5up-future-imperfect/assets/js/ie/html5shiv.js"></script><![endif]-->*/}
        <link rel="stylesheet" href="/tema/html5up-future-imperfect/assets/css/main.css" />
        {/*<!--[if lte IE 9]><link rel="stylesheet" href="/theme/html5up-future-imperfect/assets/css/ie9.css" /><![endif]-->*/}
        {/*<!--[if lte IE 8]><link rel="stylesheet" href="/theme/html5up-future-imperfect/assets/css/ie8.css" /><![endif]-->*/}
      </head>
      <body>
      <ImperfectRoute />
      <Script
        url="/tema/html5up-future-imperfect/assets/js/jquery.min.js"
        onLoad={() => {
          this.setState({jqueryDimuat:true})
        }}
      />
      {jqueryDimuat?
        (
          <div>
            <Script url="/tema/html5up-future-imperfect/assets/js/jquery.min.js"/>
            <Script url="/tema/html5up-future-imperfect/assets/js/skel.min.js"/>
            <Script url="/tema/html5up-future-imperfect/assets/js/util.js"/>
            {/*<!--[if lte IE 8]><script src="/theme/html5up-future-imperfect/assets/js/ie/respond.min.js"></script><![endif]-->*/}
            <Script url="/tema/html5up-future-imperfect/assets/js/main.js"/>
          </div>
        ):'not'}
      </body>
      </html>
    )
  }
}
export default ImperfectHtml