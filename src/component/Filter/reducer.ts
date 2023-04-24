import { createSlice, PayloadAction, createAsyncThunk ,current} from '@reduxjs/toolkit';
interface listPay {
    data: LProps[];
    loading: boolean;
    error: string | null;
}
export interface LProps{
    id: number,
    status: string,
    date: string,
    client: string,
    curency: string,
    total: number,
    invoice: string
}

const initialState: listPay = {
    data: [],
    loading: false,
    error: null,
}

// export const listSlice = createSlice({
//     name: "listPay",
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         // builder.addCase(fetchData.pending, (state, action) => {
//         //     state.loading = true;
//         //     state.error = null;
//         // }).addCase(fetchData.fulfilled, (state, action) => {

//         //     state.loading = false;
//         //     state.error = null;
//         //     state.data = action.payload;
//         // })
//     }
// })

// // export const fetchData = createAsyncThunk(
// //     "listPay/fetchData",
// //     async() =>{
// //         const response = await fetch(`http://localhost:3004/posts`);
// //         const data = await response.json();
// //         console.log(data)
// //         return data;
// //     }
// // )

// export default listSlice.reducer;