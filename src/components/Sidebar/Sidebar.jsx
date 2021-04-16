import React, { useState } from 'react'
import * as s from './SidebarStyles'

const Sidebar = props => {
    const {
        backgroundImage = '',
        header = '',
        menuItems = [],
        fonts = {
            header: '',
            menu: ''
        }
    } = props;

    const [selected, setSelected] = useState(menuItems[0].name)
    const handleMenuItemClick = name => {
        setSelected(name)
    }

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        return (
            <s.MenuItem
                key={index}
                fonts={fonts.menu}
                selected={isItemSelected}
                onClick={() => handleMenuItemClick(item.name)}
            >
                <s.Icon>{item.icon}</s.Icon>
                <s.Text>{item.name}</s.Text>   {/*tag p com uma string*/}
            </s.MenuItem>
        )
    })
    return (
        <s.SidebarContainer backgroundImage={backgroundImage}>
            <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        </s.SidebarContainer>
    )
}
export default Sidebar