import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const Favslice=createSlice({
    name:"place",
    initialState,
    reducers:{

        addPlace:(state,action)=>{
           state.push(action.payload);
        },
        deletePlace:(state,action)=>{
          state.splice(action.payload.id,1);
        }

    
    }
})



export const addPlace=Favslice.actions.addPlace;
export const deletePlace=Favslice.actions.deletePlace;
export default Favslice.reducer;