import React, { Component } from 'react';
import {Route} from "react-router";
import {HashRouter} from 'react-router-dom';
import ImperfectNav from './ImperfectNav';
import Home from './activity/Home';
import TamuMasuk from "./activity/tamu/Masuk";
import TamuIndex from "./activity/tamu/Index";
import TamuMenuIndex from "./activity/tamu/menu/Index";
// penulis
import PenulisIndex from "./activity/penulis/Index";
import PenulisArtikelBuat from "./activity/penulis/artikel/Buat";
// pengurus
import PengurusMenu from "./activity/pengurus/menu/Index";
import PengurusMenuBuat from "./activity/pengurus/menu/Buat";
import PengurusVariabel from "./activity/pengurus/variabel/Index";
import PengurusVariabelBuat from "./activity/pengurus/variabel/Buat";
import PengurusManusia from "./activity/pengurus/manusia/Index";
import PengurusManusiaBuat from "./activity/pengurus/manusia/Buat";
class ImperfectRoute extends Component {
  render() {
    return (
      <HashRouter>
        <ImperfectNav>
          <Route exact path="/" component={TamuIndex}/>
          {/*tamu*/}
          <Route exact path="/tamu" component={TamuIndex}/>
          <Route exact path="/tamu/masuk" component={TamuMasuk}/>
          <Route path="/tamu/menu/:slug/" component={TamuMenuIndex}/>
          {/*penulis*/}
          <Route exact path="/penulis" component={PenulisIndex}/>
          <Route exact path="/penulis/artikel/buat" component={PenulisArtikelBuat}/>
          {/*pengurus*/}
          <Route exact path="/pengurus/menu" component={PengurusMenu}/>
          <Route exact path="/pengurus/menu/buat" component={PengurusMenuBuat}/>
          <Route exact path="/pengurus/variabel" component={PengurusVariabel}/>
          <Route exact path="/pengurus/variabel/buat" component={PengurusVariabelBuat}/>
          <Route exact path="/pengurus/manusia" component={PengurusManusia}/>
          <Route exact path="/pengurus/manusia/buat" component={PengurusManusiaBuat}/>
        </ImperfectNav>
      </HashRouter>
    );
  }
}
export default ImperfectRoute;
