import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import {Redirect,HashRouter,BrowserRouter,Router} from 'react-router-dom';
import AlphaTamuArtikelSemua from "../aktifitas/tamu/artikel/AlphaTamuArtikelSemua";
import AlphaTamuMasuk from "../aktifitas/tamu/AlphaTamuMasuk";
import AlphaWadah from "../AlphaWadah";
import AppHistory from "../../../../imperfect/component/AppHistory";
import AlphaPenulisProfil from "../aktifitas/penulis/Profil";
import AlphaPenulisArtikelBuat from "../aktifitas/penulis/artikel/AlphaPenulisArtikelBuat";
import AlphaPenulisArtikelSemua from "../aktifitas/penulis/artikel/AlphaPenulisArtikelSemua";
import AlphaTamuArtikelSatu from "../aktifitas/tamu/artikel/AlphaTamuArtikelSatu";
import AlphaHtml from "../AlphaHtml";
import AlphaTamuMenuArtikelSemua from "../aktifitas/tamu/artikel/AlphaTamuMenuArtikelSemua";
class AlphaRute extends Component {
  render() {
    return (
      <Router
        history={AppHistory}
      >
        <AlphaWadah>
          <Route exact path="/" render={() => (
            <Redirect to="/tamu/artikel/semua/1"/>
          )}/>
          {/*tamu*/}
          <Route exact path="/tamu/artikel/semua/:hal" component={AlphaTamuArtikelSemua}/>
          <Route exact path="/tamu/artikel/satu/:slug" component={AlphaTamuArtikelSatu}/>
          <Route exact path="/tamu/masuk" component={AlphaTamuMasuk}/>
          <Route exact path="/tamu/menu/:slug/:page" component={AlphaTamuMenuArtikelSemua}/>
          {/*penulis*/}
          <Route exact path="/penulis/profil" component={AlphaPenulisProfil}/>
          <Route exact path="/penulis/artikel/semua/:hal" component={AlphaPenulisArtikelSemua}/>
          <Route exact path="/penulis/artikel/buat" component={AlphaPenulisArtikelBuat}/>
          {/*<Route exact path="/penulis/artikel/saya/ubah/:slug" component={PenulisArtikelSayaUbah}/>*/}
          {/*pengurus*/}
          {/*<Route exact path="/pengurus/menu" component={PengurusMenu}/>*/}
          {/*<Route exact path="/pengurus/menu/buat" component={PengurusMenuBuat}/>*/}
          {/*<Route exact path="/pengurus/variabel" component={PengurusVariabel}/>*/}
          {/*<Route exact path="/pengurus/variabel/buat" component={PengurusVariabelBuat}/>*/}
          {/*<Route exact path="/pengurus/manusia" component={PengurusManusia}/>*/}
          {/*<Route exact path="/pengurus/manusia/buat" component={PengurusManusiaBuat}/>*/}
        </AlphaWadah>
      </Router>
    );
  }
}
export default AlphaRute;
