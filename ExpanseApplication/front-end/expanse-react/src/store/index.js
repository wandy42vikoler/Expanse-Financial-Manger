import {createContext, useContext, useState } from 'react';


const initialAppState = {
    transactions: []
}

export const appStateContext = createContext(initialAppState)


export function useAppState(){
    return useContext(appStateContext)
}


export function AppStateProvider(props){

    const [state, setState] = useState(initialAppState);

    const appState = {
        ...state, //spead syntax/operator
        setState,

    }

    console.log({appState})

    return (
        <appStateContext.Provider value={appState}>
            {props.children} 
        </appStateContext.Provider>
    )
} 



