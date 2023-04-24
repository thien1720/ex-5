import { createSlice, PayloadAction, createAsyncThunk, current } from '@reduxjs/toolkit';
interface listPay {
    data: LProps[];
    loading: boolean;
    error: string | null;
}
export interface LProps {
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

export const listSlice = createSlice({
    name: "listPay",
    initialState,
    reducers: {
        deletePay : (state, action) => {
            const fillDele = state.data.filter((item) =>{
                 return item.id != action.payload
            })
            state.data = fillDele
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchData.fulfilled, (state, action) => {

            state.loading = false;
            state.error = null;
            state.data = action.payload;
        }).addCase(fetchFilter.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        }).addCase(fetchFilter.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.data = action.payload;
        }

        )
    }
})

export const {  deletePay } = listSlice.actions

export const fetchData = createAsyncThunk(
    "listPay/fetchData",
    async () => {
        const response = await fetch(`http://localhost:3004/posts`);
        const data = await response.json();

        return data;
    }
)

export const fetchFilter = createAsyncThunk(
    "listPay/fetchFiler",
    async (actions: { status: string, totalFrom: number, totalTo: number }) => {
        const response = await fetch(`http://localhost:3004/posts`);
        const data = await response.json();
        console.log(actions)
        return data.filter((item: LProps) => {
            console.log(item)

            const listFil = item.status == actions.status
                && (
                    (actions.totalFrom && actions.totalTo) ?
                        (actions.totalFrom <= item.total && item.total < actions.totalTo)
                        : actions.totalFrom
                            ?
                            // console.log("có from")
                            (actions.totalFrom < item.total)
                            : (actions.totalTo)
                                ?
                                // console.log("có to")
                                actions.totalTo <= item.total
                                : true
                )
            return listFil
        })
    }
)
export default listSlice.reducer;