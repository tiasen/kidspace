import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategoryList, isWxErrMsgSuccess } from '../../tools/api';

export type Category = {
  _id: string;
  background: string;
  image: string;
  name: string;
};

export type CategoryState = {
  isLoading: boolean;
  isError: boolean;
  list: Array<Category>;
};

export const getCategoryThunkAction = createAsyncThunk('GET_CATEGORY_LIST', async () => {
  const result = await getCategoryList();
  const { errMsg, data } = result;
  if (!isWxErrMsgSuccess(errMsg)) {
    throw new Error(errMsg);
  }
  return data;
});

const initialState: CategoryState = {
  isLoading: false,
  isError: false,
  list: [],
};

const slice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryThunkAction.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getCategoryThunkAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload;
    });
    builder.addCase(getCategoryThunkAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default slice.reducer;
