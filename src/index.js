import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Worte from './views/worte'
import ATemplate from './views/a-template'
import Skalierung from './views/skalierung'
import Analyse from './views/analyse'
import WOFF2Optimierung from './views/woff2-optimierung'
import Dateiverarbeitung from './views/dateiverarbeitung'
import Strom from './views/strom'
import Impressum from './views/impressum'
import Dateiformate from './views/dateiformate'
import Schriften from './views/schriften'
import BewegteBilder from './views/bewegte-bilder'
import Bildbearbeitung from './views/bildbearbeitung'
import Anbieterprfung from './views/anbieterprfung'
import Favicon from './views/favicon'
import ASCI from './views/asci'
import Bilder from './views/bilder'
import Animationen from './views/animationen'
import Einbindung from './views/einbindung'
import Serverwahl from './views/serverwahl'
import Dateien from './views/dateien'
import Funktionstest from './views/funktionstest'
import MussDasSein from './views/muss-das-sein'
import Home from './views/home'
import Vektorgrafik from './views/vektorgrafik'
import Videos from './views/videos'
import Steuerung from './views/steuerung'
import CDN from './views/cdn'
import Hosting from './views/hosting'
import DateiformateBilder from './views/dateiformate-bilder'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Worte} exact path="/worte" />
        <Route component={ATemplate} exact path="/a-template" />
        <Route component={Skalierung} exact path="/skalierung" />
        <Route component={Analyse} exact path="/analyse" />
        <Route component={WOFF2Optimierung} exact path="/woff2-optimierung" />
        <Route component={Dateiverarbeitung} exact path="/dateiverarbeitung" />
        <Route component={Strom} exact path="/strom" />
        <Route component={Impressum} exact path="/impressum" />
        <Route component={Dateiformate} exact path="/dateiformate" />
        <Route component={Schriften} exact path="/schriften" />
        <Route component={BewegteBilder} exact path="/bewegte-bilder" />
        <Route component={Bildbearbeitung} exact path="/bildbearbeitung" />
        <Route component={Anbieterprfung} exact path="/anbieterprfung" />
        <Route component={Favicon} exact path="/favicon" />
        <Route component={ASCI} exact path="/asci" />
        <Route component={Bilder} exact path="/bilder" />
        <Route component={Animationen} exact path="/animationen" />
        <Route component={Einbindung} exact path="/einbindung" />
        <Route component={Serverwahl} exact path="/serverwahl" />
        <Route component={Dateien} exact path="/dateien" />
        <Route component={Funktionstest} exact path="/funktionstest" />
        <Route component={MussDasSein} exact path="/muss-das-sein" />
        <Route component={Home} exact path="/" />
        <Route component={Vektorgrafik} exact path="/vektorgrafik" />
        <Route component={Videos} exact path="/videos" />
        <Route component={Steuerung} exact path="/steuerung" />
        <Route component={CDN} exact path="/cdn" />
        <Route component={Hosting} exact path="/hosting" />
        <Route
          component={DateiformateBilder}
          exact
          path="/dateiformate-bilder"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
