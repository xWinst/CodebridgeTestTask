import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLastArticles, Article } from './articlesOperations';
// import { getFilteredList } from './utilits';

type ArticlesState = {
    list: Article[];
    loading: boolean;
    error: string | null | undefined;
    filter: string
}

const initialState : ArticlesState = {
    list: [],
    loading: false,
    error: null,
    filter: ""
   
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getLastArticles.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getLastArticles.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        })
        .addCase(getLastArticles.rejected, (state, actions) => {
            state.loading = false;
            state.error = actions.payload;
        })
    }
});

export const { setFilter } = articlesSlice.actions;

export default articlesSlice.reducer;
