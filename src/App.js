import React from 'react'
import * as s from './App.Styles'
import Sidebar from './components/Sidebar/Sidebar'
import MainView from './components/MainView/MainView'
import { BsFillAlarmFill, BsFillBootstrapFill, BsFillPeopleFill, BsFillXDiamondFill } from "react-icons/bs";

const App = () => {

  const backgroundImage = 'img/2808.jpg'
  const menuItems = [

    { name: "home", to: '/', icon: <BsFillAlarmFill/>, submenuItems: [] },
    { name: "product", to: '/', icon: <BsFillBootstrapFill/>, submenuItems: [] },
    { name: "client", to: '/', icon: <BsFillPeopleFill/>, submenuItems: [] },
    {
      name: "numbers", to: '/', icon: <BsFillXDiamondFill/>, submenuItems: [
        { name: "sells", to: "/sells" },
        { name: "clients range", to: "/clients" },
        { name: "profit", to: "/profit" }
      ]
    },
  ];

  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        header="There is no other way"
        menuItems={menuItems}
      />
      <MainView />
    </s.App>
  );
}

export default App;
