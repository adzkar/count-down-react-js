import React, {Component} from 'react'
// asset
import gambar from './asset/img/logo.svg'

class Header extends Component {
  constructor(props) {
    super(props)
    const currentTime = new Date()
    this.state = {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
      ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
    }

  }

  setTimer() {
    setTimeout(this.updateClock.bind(this), 1000)
  }

  updateClock() {
    const currentTime = new Date()
    this.setState(
      {
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds(),
        ampm: currentTime.getHours() >= 12 ? 'pm' : 'am'
      }
    )
    this.setTimer()
  }



  render() {
    return(
      <header>
        <div id="cover">
          <div id="top-header">
            <div className="container">
              <div className="row">
                <Logo/>
                <Menu/>
              </div>{/* row */}
              <div className="row">
                <HeaderContent/>
              </div>
            </div>{/* container */}
          </div>{/* top header */}
        </div>{/* cover */}
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

const HeaderContent = () => (
  <div id="header-content" className="row">
    <div className="col-12">
      <h2>This site will be launch soon</h2>
    </div>
  </div>
)

export default Header
