import React, { Component } from 'react';
import {Route} from "react-router";
import {HashRouter} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './activity/Home';
import HomeLogin from '../../main/home/login/index';
import HomeArticle from '../../main/home/article/index';
import AuthorDashboard from '../../main/author/dashboard/index';
import AuthorArticleCreate from '../../main/author/article/create/index';
import TamuMasuk from "./activity/tamu/Masuk";
import TamuIndex from "./activity/tamu/Index";
// penulis
import PenulisIndex from "./activity/penulis/Index";
import PenulisArtikelBuat from "./activity/penulis/artikel/Buat";

class ImperfectRoute extends Component {
  render() {
    return (
      <HashRouter>
        <Navigation>
          {/*artikel*/}
          <Route exact path="/tamu" component={TamuIndex}/>
          <Route path="/tamu/masuk" component={TamuMasuk}/>
          <Route exact path="/tamu/artikel/menu/:slug" component={TamuIndex}/>
          {/*penulis*/}
          <Route exact path="/penulis" component={PenulisIndex}/>
          <Route exact path="/penulis/artikel/buat" component={PenulisArtikelBuat}/>
          <Route exact path="/" component={TamuIndex}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/home/login" component={HomeLogin}/>
          <Route path="/home/article/:slug" component={HomeArticle}/>
          <Route path="/author/dashboard" component={AuthorDashboard}/>
          <Route path="/author/article/create" component={AuthorArticleCreate}/>
        </Navigation>
      </HashRouter>
    );
  }
}
export default ImperfectRoute;
