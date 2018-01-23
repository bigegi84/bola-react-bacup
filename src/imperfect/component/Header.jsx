import React from 'react'
import Menu from "./view/Menu";
import MenuList from "./list/MenuList";
import {Url} from "../../config";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";
import mobxStore from "../../mobx/mobxStore";
import {Observer} from "mobx-react/custom.module";
import ApiHelper from "../../helper/ApiHelper";
class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      judul:{}
    };
    this.loadData=this.loadData.bind(this);
  }
  componentWillMount(){
    this.loadData();
  }
  loadData(){
    ApiHelper.tamuMenu();
  }
  render(){
    return(
      <header id="header">
        <h1>
          <Observer>
            {()=>{
              return (
                <Link
                  to={`/tamu/artikel/semua/1`}
                  replace
                >
                  {mobxStore.judul.nilai}
                </Link>
              )
            }}
          </Observer>
        </h1>
        <nav className="links">
          <Observer>
            {()=>{
              return (
                <MenuList
                  data={mobxStore.menu}
                />
              )
            }}
          </Observer>
        </nav>
        <nav className="main">
          <ul>
            <li className="search">
              <a className="fa-search" href="#search">Search</a>
              <form id="search" method="get" action="#">
                <input type="text" name="query" placeholder="Search" />
              </form>
            </li>
            <li className="menu">
              <a
                className="fa-bars"
                href="#menu"
              >Menu</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
export default Header