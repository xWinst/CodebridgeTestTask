import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { REACT_APP_BASE_URL } = process.env;

axios.defaults.baseURL = REACT_APP_BASE_URL;

export type Article = {
    id: number,
    featured: boolean,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches: [
      {
        id: string,
        provider: string
      }
    ],
    events: [
      {
        id: string,
        provider: string
      }
    ]
  }


export const getLastArticles = createAsyncThunk<Article[], undefined, {rejectValue: string}>(
    'getLastArticles',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('?_limit=15');
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);