import React, { createContext, useReducer } from 'react'
import {Reducer,initialState} from '../../Utility/rEDUCER'


export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState)

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  )
}
