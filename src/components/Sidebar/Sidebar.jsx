import React from 'react'
import * as s from './SidebarStyles'

const Sidebar = props => {
    const { backgroundImage, header } = props
    const menuItens = ["home", "clients", "blog", "etc, etc"]
    return (<s.SidebarContainer backgroundImage={backgroundImage}>
        <s.SidebarHeader>{header}</s.SidebarHeader>
    </s.SidebarContainer>
    )
}
export default Sidebar