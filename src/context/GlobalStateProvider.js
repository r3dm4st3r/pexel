import { createContext, useState } from "react";

const GlobalStateContext = createContext({});

export const GlobalStateProvider = ({ children }) => {
    const [globalData, setGlobalData] = useState({});

    return (
        <GlobalStateContext.Provider value={{ globalData, setGlobalData }}>
            {children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalStateContext;