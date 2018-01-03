import React from 'react'
import Menu from "./view/Menu";
import MenuList from "./list/MenuList";
import {Url} from "../../config";
import {Link} from "react-router-dom";
class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      judul:{}
    };
    this.loadData=this.loadData.bind(this);
    this.getJudul=this.getJudul.bind(this);
    this.getMenu=this.getMenu.bind(this);
  }
  componentWillMount(){
    this.loadData();
  }
  loadData(){
    this.getMenu();
    this.getJudul()
  }
  getMenu(){
    fetch(Url+'tamu/menu',
      {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((r) => {
        r=r.data;
        this.setState({data:r});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getJudul(){
    fetch(Url+'tamu/variabel/'+'Judul%20Web',
      {
        method: 'GET',
      })
      .then((response) => response.json())
      .then((r) => {
        r=r.data;
        this.setState({judul:r});
      })
      .catch((error) => {
        console.error(error);
      });
  }
  render(){
    return(
      <header id="header">
        <h1>
          <Link
            to={`/tamu`}>
            {this.state.judul.nilai}
          </Link>
          </h1>
        <nav className="links">
          <MenuList
            data={this.state.data}
          />
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
              <a className="fa-bars">Menu</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header