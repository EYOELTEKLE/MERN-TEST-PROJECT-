import {createSlice} from '@reduxjs/toolkit'
let val  = {val:false};
export const userSlice = createSlice({
    name:"users",
    initialState: val,
    reducers:{
        setUsers:(state) => {
            state.val = !state.val;
        }
    }
})
export const {setUsers} = userSlice.actions;
export default userSlice.reducer;