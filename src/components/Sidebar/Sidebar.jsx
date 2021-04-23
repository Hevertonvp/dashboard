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
        const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates))   // wow! Pq não copiar o objeto de forma direta? 
        if (subMenusStates.hasOwnProperty(index)) {
            subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen']
            setSubMenus(subMenusCopy)
        }
    }

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        const hasSubmenus = !!item.subMenuItems.length; // maior que zero: true

        const isOpen = subMenusStates[index] ? subMenusStates[index].isOpen : null





        

        const subMenuJSX = item.subMenuItems.map((item, index) => {
            return (
                <Link to={item.to} key={index} style={{textDecoration: 'none'}}>
                <s.SubMenuItem>{item.name}</s.SubMenuItem>
                </Link>
            )
        })








        return (
            <s.ItemContainer key={index}>
                <Link to={item.to} style={{textDecoration: 'none'}}>
                    <s.MenuItem
                        fonts={fonts.menu}
                        selected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name, index)}
                        isSidebarOpen={isSidebarOpen}
                    >
                        <s.Icon isSidebarOpen={isSidebarOpen}>{item.icon}</s.Icon>
                        <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>   {/*tag p com uma string*/}
                        {hasSubmenus && isSidebarOpen && (
                            <s.DropdownIcon selected={isItemSelected} isOpen={isOpen} />
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
                            <s.SubMenuItemContainer isSidebarOpen={isSidebarOpen}>{subMenuJSX}</s.SubMenuItemContainer>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </s.ItemContainer>
        )
    })
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