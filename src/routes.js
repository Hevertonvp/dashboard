import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import Destinations from './components/Destinations/Destinations'
import Services from './components/Services/Services'
import About from './components/About/About'


const Routes = () => {
    <Switch>
        <Route exact path="./" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/destinations" component={Destinations} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />

    </Switch>
}

export default Routes