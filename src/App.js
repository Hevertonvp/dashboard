import React from 'react'
import * as s from './App.Styles'
import Sidebar from './components/Sidebar/Sidebar'
import MainView from './components/MainView/MainView'

const App = () => {

  const backgroundImage = 'img/2808.jpg'


  return (
    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        header="There is no other way"
      />

      <MainView />
    </s.App>
  );
}

export default App;
