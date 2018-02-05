import React from 'react'
import AlphaTindakanVertikal from "./AlphaTindakanVertikal";
import AlphaLis from "./AlphaLis";
import {Link} from "react-router-dom";
import AlphaTombolPasSpesial from "./AlphaTombolPasSpesial";
class AlphaMenuTamu extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="12u 12u(narrower) 12u$(mobilep)">
          <AlphaTindakanVertikal>
            <AlphaLis>
              <Link
                to={'/tamu/masuk'}
                replace
              >
                <AlphaTombolPasSpesial>
                  Masuk
                </AlphaTombolPasSpesial>
              </Link>
            </AlphaLis>
          </AlphaTindakanVertikal>
        </div>
      </div>
    )
  }
}
export default AlphaMenuTamu