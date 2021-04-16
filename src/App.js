import React from 'react'
import * as s from './App.Styles'
import Sidebar from './components/Sidebar/Sidebar'
import MainView from './components/MainView/MainView'
import { BsFillAlarmFill, BsFillBootstrapFill, BsFillPeopleFill, BsFillXDiamondFill } from "react-icons/bs";

const App = () => {

  const backgroundImage = 'img/2808.jpg'   /*converter para uma resolução menor antes do deploy*/
  const sidebarHeader = {
    fullName: "Bem Vindo, (name)",
    shortName: "open"
  }
  const menuItems = [

    { name: "home", to: '/', icon: <BsFillAlarmFill />, submenuItems: [] },
    { name: "product", to: '/', icon: <BsFillBootstrapFill />, submenuItems: [] },
    { name: "client", to: '/', icon: <BsFillPeopleFill />, submenuItems: [] },
    {
      name: "numbers", to: '/', icon: <BsFillXDiamondFill />, submenuItems: [
        { name: "sells", to: "/sells" },
        { name: "clients range", to: "/clients" },
        { name: "profit", to: "/profit" }
      ]
    },
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
      />
      <MainView />
    </s.App>
  );
}

export default App;
