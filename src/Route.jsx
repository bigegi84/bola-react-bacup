import React, { Component } from 'react';
import {Route} from "react-router";
import {HashRouter} from 'react-router-dom';
import Navigation from './imperfect/component/Navigation';
import Home from './imperfect/component/activity/Home';
import HomeLogin from './main/home/login';
import HomeArticle from './main/home/article';
import AuthorDashboard from './main/author/dashboard';
import AuthorArticleCreate from './main/author/article/create';

class ImperfectRoute extends Component {
  render() {
    return (
      <HashRouter>
        <Navigation>
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
