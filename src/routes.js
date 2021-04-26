import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/MainView/Home/Home'
import Produtos from './components/MainView/Produtos/Produtos'
import Clientes from './components/MainView/Clientes/Clientes'
import Servicos from './components/MainView/Servicos/Servicos'
import Country from './components/MainView/Clientes/Country/Country'


const Routes = () => {
    return (
        <Switch>
            <Route exact path="./" component={Home} />
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/clientes" component={Clientes} />
            <Route exact path="/clientes/:country" component={Country} />
            <Route exact path="/servicos" component={Servicos} />
        </Switch>
    )
}

export default Routes