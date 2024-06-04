import {render as rtlRender} from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider} from 'react-redux';
import authReducer from '../../features/auth/authSlice'
import axios from 'axios';


function reducer(ui, {
    preloadedState,
    store = configureStore({reducer: {auth: authReducer},
    preloadedState
    }),
    ...renderOptions
} = {}
){
    function Wrapper({children}){
        return(
           <Provider store={store}>
                <Router>{children}</Router>
           </Provider> 
        )
    }
    return rtlRender(ui, {wrapper: Wrapper, ...renderOptions});
}

export * from '@testing-library/react'
// overding the reducer from the testing library with our reducer specified
export {reducer}