import React, { Component } from 'react';
import {Route} from "react-router";
import {HashRouter} from 'react-router-dom';
import Navigation from './imperfect/component/Navigation';
import Home from './imperfect/component/activity/Home';
import HomeLogin from './main/home/login';
import HomeArticle from './main/home/article';
import AuthorDashboard from './main/author/dashboard';
import AuthorArticleCreate from './main/author/article/create';
import TamuMasuk from "./imperfect/component/activity/tamu/Masuk";
import TamuIndex from "./imperfect/component/activity/tamu/Index";
// penulis
import PenulisIndex from "./imperfect/component/activity/penulis/Index";
import PenulisArtikelBuat from "./imperfect/component/activity/penulis/artikel/Buat";

class ImperfectRoute extends Component {
  render() {
    return (
      <HashRouter>
        <Navigation>
          {/*artikel*/}
          <Route exact path="/tamu" component={TamuIndex}/>
          <Route path="/tamu/masuk" component={TamuMasuk}/>
          {/*penulis*/}
          <Route exact path="/penulis" component={PenulisIndex}/>
          <Route exact path="/penulis/artikel/buat" component={PenulisArtikelBuat}/>
          <Route exact path="/" component={Home}/>
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
