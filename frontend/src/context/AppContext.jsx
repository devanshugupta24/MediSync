import { createContext } from "react";
// createContext allows components to share values (like state) without 
// passing props manually through every level of the component tree.
import { doctors } from "../assets/assets";

export const AppContext=createContext()
//Creates a new context object

const AppContextProvider=(props)=>{

    const currencySymbol='$'

    const value={
        doctors,currencySymbol
    }

    return (
        //Wraps the context provider around child components.
        //This renders the children components passed to the AppContextProvider.
        <AppContext.Provider value={value}>
            {props.children} 
        </AppContext.Provider>
    )
}

export default AppContextProvider