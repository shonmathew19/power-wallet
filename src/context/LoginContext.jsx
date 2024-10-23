import React, { createContext, useState } from 'react'
export const roleContext = createContext();
function RoleContextShare({ children }) {
    const [role, setRole] = useState(null)
    return (
        <roleContext.Provider value={{ role, setRole}}>
            {children}
            
        </roleContext.Provider>
    )
}

export {RoleContextShare}