import React, { useState, useEffect } from 'react'
import * as s from './SidebarStyles'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
        },
        colorPalette = {
            bgColor1: 'rgba(252, 82, 150, 0.8)',
            bgColor2: 'rgba(246, 112, 98, 0.8)',
            fontColor: 'rgba(19, 15, 64)',
            fontColorSelected: 'rgba(255, 255, 255)',
            dividerColor: 'rgba(225, 112, 85)',
            selectedBackgroundCollapsedMode: 'dark'
        }

    } = props;

    const [selected, setSelected] = useState(menuItems[0].name)
    const [isSidebarOpen, setSidebarState] = useState(true)
    const [header, setHeader] = useState(sidebarHeader.fullName)
    const [subMenusStates, setSubMenus] = useState({})



    //Effect - primeira utilização!

    //para adicionar index de items que contém sub-menus

    useEffect(() => {
        const newSubMenus = {};
        menuItems.forEach((item, index) => {
            const hasSubmenus = !!item.subMenuItems.length;
            if (hasSubmenus) {
                newSubMenus[index] = {};
                newSubMenus[index]['isOpen'] = false;
                newSubMenus[index]['selected'] = null
            }
        })
        setSubMenus(newSubMenus)
    }, [menuItems])



    useEffect(() => {
        isSidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 220) : setHeader(sidebarHeader.shortName)
    }, [isSidebarOpen, sidebarHeader])

    useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth < 1000) {
                setSidebarState(false)
            }
            else setSidebarState(true)
        }
        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth)     //limpa a memória, evita que o EL permaneça ativo
    }, [isSidebarOpen]);


    const handleMenuItemClick = (name, index) => {
        setSelected(name)
        const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates))   // Pq não copiar o objeto de forma direta? 
        if (subMenusStates.hasOwnProperty(index)) {
            subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen']
            setSubMenus(subMenusCopy)
        }
        else {
            for (let item in subMenusStates) {
                subMenusCopy[item]['isOpen'] = false
                subMenusCopy[item]['seleted'] = null
            }
            setSubMenus(subMenusCopy)
        }
    }


    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        const hasSubmenus = !!item.subMenuItems.length; // maior que zero: true

        const isOpen = subMenusStates[index] ? subMenusStates[index].isOpen : null

        const handleSubMenuItemClick = (menuItemIdx, subMenuIdx) => {
            const newMenusCopy = JSON.parse(JSON.stringify(subMenusStates))
            newMenusCopy[menuItemIdx]['selected'] = subMenuIdx;
            setSubMenus(newMenusCopy);

        }

        const subMenuItemsJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            const isSubMenuItemSelected = subMenusStates[index]?.selected === subMenuItemIndex
            console.log(isSubMenuItemSelected)
            return (
                <Link to={`${item.to}${subMenuItem.to}`} key={subMenuItemIndex} style={{ textDecoration: 'none' }}>
                    <s.SubMenuItem
                        onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
                        selected={isSubMenuItemSelected}
                        colorPalette={colorPalette}
                    >
                        {subMenuItem.name}
                    </s.SubMenuItem>
                </Link>
            )
        })

        return (
            <s.ItemContainer key={index}>
                <Link to={item.to} style={{ textDecoration: 'none' }}>
                    <s.MenuItem
                        fonts={fonts.menu}
                        selected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name, index)}
                        isSidebarOpen={isSidebarOpen}
                        colorPalette={colorPalette}
                    >
                        <s.Icon isSidebarOpen={isSidebarOpen}>{item.icon}</s.Icon>
                        <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>   {/*tag p com uma string*/}
                        {hasSubmenus && isSidebarOpen && (
                            <s.DropdownIcon selected={isItemSelected}
                                isOpen={isOpen}
                                colorPalette={colorPalette}
                            />
                        )}
                    </s.MenuItem>
                </Link>
                {/*mostrar itens apenas se existirem*/}
                <AnimatePresence>
                    {hasSubmenus && isOpen && (
                        <motion.nav
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.35 }}
                            exit={{ opacity: 0, x: -30 }}
                        >
                            <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen} colorPalette={colorPalette}>{subMenuItemsJSX}</s.SubMenuItemContainer>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </s.ItemContainer>
        )
    })
    return (
        <s.SidebarContainer backgroundImage={backgroundImage} isSidebarOpen={isSidebarOpen} colorPalette = {colorPalette}>
            <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.TogglerContainer onClick={() => setSidebarState(!isSidebarOpen)} >
                <s.Toggler />
            </s.TogglerContainer >
        </s.SidebarContainer>


    )
}
export default Sidebar