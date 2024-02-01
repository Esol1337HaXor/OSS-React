import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import AHeadline from '../components/a-headline'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>OSS</title>
        <meta property="og:title" content="OSS" />
      </Helmet>
      <div className="home-content">
        <Link to="/" className="home-navlink">
          <AHeadline text="Seite105" className="home-component"></AHeadline>
        </Link>
        <Link to="/analyse" className="home-navlink1">
          <div className="home-analyse">
            <span className="home-text">Analyse</span>
          </div>
        </Link>
        <img alt="image" src="/Icons/seed.svg" className="home-image" />
        <Link to="/dateien" className="home-navlink2">
          <div className="home-dateien">
            <span className="home-text1">Dateien</span>
          </div>
        </Link>
        <Link to="/hosting" className="home-navlink3">
          <div className="home-hosting">
            <span className="home-text2">Hosting</span>
          </div>
        </Link>
        <div className="home-legal">
          <Link to="/steuerung" className="home-navlink4">
            <div className="home-container1">
              <span className="home-text3">Steuerung</span>
            </div>
          </Link>
          <div className="home-container2">
            <svg viewBox="0 0 634.88 1024" className="home-icon">
              <path d="M402.286 717.714v137.143c0 12.571-10.286 22.857-22.857 22.857h-137.143c-12.571 0-22.857-10.286-22.857-22.857v-137.143c0-12.571 10.286-22.857 22.857-22.857h137.143c12.571 0 22.857 10.286 22.857 22.857zM582.857 374.857c0 108.571-73.714 150.286-128 180.571-33.714 19.429-54.857 58.857-54.857 75.429v0c0 12.571-9.714 27.429-22.857 27.429h-137.143c-12.571 0-20.571-19.429-20.571-32v-25.714c0-69.143 68.571-128.571 118.857-151.429 44-20 62.286-38.857 62.286-75.429 0-32-41.714-60.571-88-60.571-25.714 0-49.143 8-61.714 16.571-13.714 9.714-27.429 23.429-61.143 65.714-4.571 5.714-11.429 9.143-17.714 9.143-5.143 0-9.714-1.714-14.286-4.571l-93.714-71.429c-9.714-7.429-12-20-5.714-30.286 61.714-102.286 148.571-152 265.143-152 122.286 0 259.429 97.714 259.429 228.571z"></path>
            </svg>
          </div>
          <Link to="/impressum" className="home-navlink5">
            <div className="home-container3">
              <span className="home-text4">Impressum</span>
            </div>
          </Link>
        </div>
      </div>
      <Link to="/funktionstest" className="home-navlink6">
        Testpage
      </Link>
    </div>
  )
}

export default Home
