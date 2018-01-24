import React, { Component } from 'react';
import {Route, Switch} from "react-router";
import {Redirect,BrowserRouter} from 'react-router-dom';
import AlphaTamuArtikelSemua from "../aktifitas/tamu/artikel/AlphaTamuArtikelSemua";

class AlphaRute extends Component {
  render() {
    return (
      <BrowserRouter
      >
        <Switch>
          <Route exact path="/" render={() => (
            <Redirect to="/tamu/artikel/semua/1"/>
          )}/>
          {/*<Route exact path="/penulis/profil" component={PenulisManusiaSaya}/>*/}
          {/*tamu*/}
          <Route exact path="/tamu/artikel/semua/:hal" component={AlphaTamuArtikelSemua}/>
          {/*<Route exact path="/tamu/artikel/satu/:slug" component={TamuArtikel}/>*/}
          {/*<Route exact path="/tamu/masuk" component={TamuMasuk}/>*/}
          {/*<Route exact path="/tamu/menu/:slug/:page" component={TamuMenuIndex}/>*/}
          {/*penulis*/}
          {/*<Route exact path="/penulis/artikel/semua/:hal" component={PenulisArtikel}/>*/}
          {/*<Route exact path="/penulis/artikel/buat" component={PenulisArtikelBuat}/>*/}
          {/*<Route exact path="/penulis/artikel/saya/ubah/:slug" component={PenulisArtikelSayaUbah}/>*/}
          {/*pengurus*/}
          {/*<Route exact path="/pengurus/menu" component={PengurusMenu}/>*/}
          {/*<Route exact path="/pengurus/menu/buat" component={PengurusMenuBuat}/>*/}
          {/*<Route exact path="/pengurus/variabel" component={PengurusVariabel}/>*/}
          {/*<Route exact path="/pengurus/variabel/buat" component={PengurusVariabelBuat}/>*/}
          {/*<Route exact path="/pengurus/manusia" component={PengurusManusia}/>*/}
          {/*<Route exact path="/pengurus/manusia/buat" component={PengurusManusiaBuat}/>*/}
        </Switch>
      </BrowserRouter>
    );
  }
}
export default AlphaRute;
