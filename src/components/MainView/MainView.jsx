import React from 'react'
import * as s from './MainViewStyles'
import Routes from '../../routes'
import ColorPicker from './ColorPicker/ColorPicker'

const MainView = () => {
    return (
        <s.MainViewContainer>
            <Routes />
            <ColorPicker />
        </s.MainViewContainer>
    )
}
export default MainView