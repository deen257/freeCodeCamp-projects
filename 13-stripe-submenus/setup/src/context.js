import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSubmenu, setIsSubmenu] = useState(false)
  const [location, setLocation] = useState({})
  const [page, setPage] = useState({ page: '', links: [] })

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openSubmenubar = (text, cordinates) => {
    const page = sublinks.find((link) => link.page === text)
    setPage(page)
    setLocation(cordinates)
    setIsSubmenu(true)
  }
  const closeSubmenubar = () => {
    setIsSubmenu(false)
  }

  return (
    <AppContext.Provider
      value={{
        isSubmenu,
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        location,
        page,
        openSubmenubar,
        setLocation,
        closeSubmenubar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
