import React, {Component} from 'react'
// asset
import gambar from './asset/img/logo.svg'

// console.log(gambar)

class Header extends Component {
  render() {
    return(
      <header>
        <div id="cover">
          <div id="top-header">
            <div className="container">
              <div className="row">
                <Logo/>
                <Menu/>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

const Logo = () => (
  <div id="logo" className="col-4">
    <a href="#" className="row">
      <img src={gambar} alt="logo image" className="col-6"/>
      <h2 className="col-6">siapLuncur</h2>
    </a>
  </div>
)

const Menu = () => (
  <div className="col-8" id="menu">
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
      <li>
        <a href="#">Donate</a>
      </li>
    </ul>
  </div>
)

export default Header
