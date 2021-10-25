import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const loadData = createAsyncThunk(
    'feedData/loadData',
    async (url,thunkAPI)=> {
        const response = await fetch(url);
        const jsonResponse = await response.json();
        return jsonResponse;
    }
)
export const feedDataSlice = createSlice({
    name:"feedData",
    initialState:{
        isLoading:true,
        hasError:false,
        feedData:{}
    },
    reducers:{
        
    },

    extraReducer:{
        [loadData.pending]:(state,action)=>{
            state.isLoading=true;
            state.hasError=false;
        },
        [loadData.fulfilled]:(state,action)=>{
            console.log(action.payload);
            console.log("fwWF");


            state.feedData=action.payload;
            state.isLoading=false;
            state.hasError=false;
        },
        [loadData.rejected]:(state,action)=>{
            
            state.isLoading=false;
            state.hasError=true;
        }
    }
})

export const selectFeedData = (state) => state.feedData.feedData;
export default feedDataSlice.reducer;