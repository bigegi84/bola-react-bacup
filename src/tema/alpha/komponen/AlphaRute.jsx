import React, { Component } from 'react';
import {Route} from "react-router";
import {HashRouter, Redirect,BrowserRouter} from 'react-router-dom';
import ImperfectNav from './ImperfectNav';
import TamuMasuk from "./activity/tamu/Masuk";
import TamuIndex from "./activity/tamu/Index";
import TamuArtikel from "./activity/tamu/artikel/Index";
import TamuMenuIndex from "./activity/tamu/menu/Index";
// penulis
import PenulisManusiaSaya from "./activity/Profil";
import PenulisArtikel from "./activity/penulis/artikel/Index";
import PenulisArtikelBuat from "./activity/penulis/artikel/Buat";
import PenulisArtikelSayaUbah from "./activity/penulis/artikel/Ubah";
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
      <BrowserRouter
      >
        <ImperfectNav>
          <Route exact path="/" render={() => (
            <Redirect to="/tamu/artikel/semua/1"/>
          )}/>
          <Route exact path="/penulis/profil" component={PenulisManusiaSaya}/>
          {/*tamu*/}
          <Route exact path="/tamu/artikel/semua/:hal" component={TamuIndex}/>
          <Route exact path="/tamu/artikel/satu/:slug" component={TamuArtikel}/>
          <Route exact path="/tamu/masuk" component={TamuMasuk}/>
          <Route exact path="/tamu/menu/:slug/:page" component={TamuMenuIndex}/>
          {/*penulis*/}
          <Route exact path="/penulis/artikel/semua/:hal" component={PenulisArtikel}/>
          <Route exact path="/penulis/artikel/buat" component={PenulisArtikelBuat}/>
          <Route exact path="/penulis/artikel/saya/ubah/:slug" component={PenulisArtikelSayaUbah}/>
          {/*pengurus*/}
          <Route exact path="/pengurus/menu" component={PengurusMenu}/>
          <Route exact path="/pengurus/menu/buat" component={PengurusMenuBuat}/>
          <Route exact path="/pengurus/variabel" component={PengurusVariabel}/>
          <Route exact path="/pengurus/variabel/buat" component={PengurusVariabelBuat}/>
          <Route exact path="/pengurus/manusia" component={PengurusManusia}/>
          <Route exact path="/pengurus/manusia/buat" component={PengurusManusiaBuat}/>
        </ImperfectNav>
      </BrowserRouter>
    );
  }
}
export default ImperfectRoute;
