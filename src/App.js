import React from 'react'
import * as s from './App.Styles'
import Sidebar from './components/Sidebar/Sidebar'
import MainView from './components/MainView/MainView'
import { BsFillAlarmFill, BsFillBootstrapFill, BsFillPeopleFill } from "react-icons/bs";
import * as Palette from './colors'
const App = () => {

  const backgroundImage = 'img/montain.jpg'   /*converter para uma resolução menor antes do deploy*/
  const sidebarHeader = {
    fullName: "name",
    shortName: "open"
  }
  const menuItems = [
    { name: "home", to: '/', icon: <BsFillAlarmFill />, subMenuItems: [] },
    {
      name: "clientes", to: '/clientes', icon: <BsFillBootstrapFill />, subMenuItems: [
        { name: "vendas", to: '/vendas' },
        { name: "inventário", to: '/inventario'},
        { name: "tony", to: '/inventario'},
        { name: "ramos", to: '/inventario'},
      ]
    },
    { name: "produtos", to: '/produtos', icon: <BsFillPeopleFill />, subMenuItems: [] },
  ];
  const fonts = {
    header: 'Archivo Black',
    menu: 'poppins'
  }

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sidebarHeader={sidebarHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette = {Palette.silver}
      />
      <MainView /*pickup-a color*//>
    </s.App>
  );
}

export default App;
