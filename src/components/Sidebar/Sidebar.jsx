import React from 'react'
import * as s from './SidebarStyles'

const Sidebar = props => {
    const {
        backgroundImage = '',
        header = '',
        menuItems = []
    } = props;

    const menuItemsJSX = menuItems.map((item, index) => {
        return (
            <s.MenuItem key={index}>
                <s.Icon>{item.icon}</s.Icon>
                <s.Text>{item.name}</s.Text>   {/*tag p com uma string*/}
            </s.MenuItem>
        )
    })
    return (
        <s.SidebarContainer backgroundImage={backgroundImage}>
            <s.SidebarHeader>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        </s.SidebarContainer>
    )
}
export default Sidebar