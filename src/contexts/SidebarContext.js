import React, { createContext, useState } from 'react'

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
    return <SidebarContext.Provider value={{}}>
        {children}
    </SidebarContext.Provider>
}

export default SidebarProvider