import {Reducer, initialState} from './Reducer'
import {createStore} from 'redux';

export const ConfigureStore =() => {
    const store = createStore(
        Reducer, 
        initialState,
    );
    
    return store;
}