import {createContext, useContext, useState } from 'react';


const initialAppState = {
    totalBalance: 0,
    transactions: [],
    totalIncome: 0,
    totalExpense: 0,
    pieCategories: []

}

export const appStateContext = createContext(initialAppState)


export function useAppState(){
    return useContext(appStateContext)
}


export function AppStateProvider(props){

    const [state, setState] = useState(initialAppState);

    const appState = {
        ...state, //spread syntax/operator
        setState,
    }

    console.log({appState})

    return (
        <appStateContext.Provider value={appState}>
            {props.children} 
        </appStateContext.Provider>
    )
} 



