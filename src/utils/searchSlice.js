import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'search',
    initialState:{
        searchCache:{},
        searchSuggetion:[]
    },
    reducers:{
        addToCache: (state, action)=>{
            const newData = action.payload
            Object.assign(state.searchCache, newData)
        },
        addSearchSuggetion: (state, action)=>{
            state.searchSuggetion = action.payload
        }
    }
})

export const {addToCache, addSearchSuggetion} = searchSlice.actions
export default searchSlice.reducer