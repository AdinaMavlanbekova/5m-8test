import {createSlice} from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: []
    },
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload)
        }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer;