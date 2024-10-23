
import React, { createContext, useState } from 'react'

    export const roleContext = createContext();
    function RoleContext({ children }) {
        const [role, setRole] = useState(null)
        return (
            <roleContext.Provider value={{ role, setRole }}>
                {children}

            </roleContext.Provider>
        )
    }
    
export default RoleContext