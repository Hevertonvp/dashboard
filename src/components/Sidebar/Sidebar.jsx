import React, { useState, useEffect } from 'react'
import * as s from './SidebarStyles'

const Sidebar = props => {
    const {
        backgroundImage = '',
        sidebarHeader = {
            fullName: '',
            shortName: '',
        },
        menuItems = [],
        fonts = {
            header: '',
            menu: ''
        }
    } = props;

    const [selected, setSelected] = useState(menuItems[0].name)
    const [isSidebarOpen, setSidebarState] = useState(true)
    const [header, setHeader] = useState(sidebarHeader.fullName)

    //Effect - primeira utilização!
    useEffect(() => {
        isSidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 220) : setHeader(sidebarHeader.shortName)
    }, [isSidebarOpen, sidebarHeader])

    const handleMenuItemClick = name => {
        setSelected(name)
    }
    console.log('scsc')


    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        return (
            <s.MenuItem
                key={index}
                fonts={fonts.menu}
                selected={isItemSelected}
                onClick={() => handleMenuItemClick(item.name)}
            >
                <s.Icon isSidebarOpen={isSidebarOpen}>{item.icon}</s.Icon>
                <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>   {/*tag p com uma string*/}
            </s.MenuItem>
        )
    })
    console.log(isSidebarOpen)
    return (
        <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen}>
            <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)} >
                <s.Toggler />
            </s.TogglerContainer >
        </s.SidebarContainer>


    )
}
export default Sidebar