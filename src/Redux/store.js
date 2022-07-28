import {createSlice,configureStore} from '@reduxjs/toolkit';

const slice = createSlice({
    name : 'slice',
    initialState : { isWalletConnected : false, account : null},
    reducers : {
        setIsWalletConnected(state,actions){
            state.isWalletConnected = actions.payload;
        },
        setAccount(state,actions){
            state.account = actions.payload;
        }
    }
});

const store = configureStore({
    reducer : {slice:slice.reducer}
});

export default store;
export const actions = slice.actions;