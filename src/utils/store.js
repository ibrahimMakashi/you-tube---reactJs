import { configureStore } from "@reduxjs/toolkit"
import headerSlice from './headerSlice'
import searchSlice from './searchSlice'



const store = configureStore({
    reducer:{
        header: headerSlice,
        search:searchSlice
    }
})

export default store