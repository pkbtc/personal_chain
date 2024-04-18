import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [contextValue, setContextValue] = useState(/* initial value */);

    return (
        <MyContext.Provider value={{ contextValue, setContextValue }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };
