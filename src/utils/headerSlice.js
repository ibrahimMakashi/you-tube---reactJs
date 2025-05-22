import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name:'header',
    initialState:{
        isMenu: false
    }, 
    reducers:{
        toggleIsMenu: (state, action)=>{
            state.isMenu = !state.isMenu
        }
    }
})

export const {toggleIsMenu} = headerSlice.actions
export default headerSlice.reducer