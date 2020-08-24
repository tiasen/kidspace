import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getGoodsById, isWxErrMsgSuccess } from '../../tools/api';

export type Goods = {
  _id: string;
  categoryId: string;
  image: string;
  name: string;
  nameEn: string;
};

export type GoodsState = {
  isLoading: boolean;
  isError: boolean;
  data: { [key: string]: Array<Goods> };
};

export const getGoodsThunkAction = createAsyncThunk('GET_GOODS_LIST', async (id: string) => {
  const result = await getGoodsById(id);
  const { errMsg, data } = result;
  if (!isWxErrMsgSuccess(errMsg)) {
    throw new Error(errMsg);
  }
  return { id, data };
});

const initialState: GoodsState = {
  isLoading: false,
  isError: false,
  data: {},
};

const slice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGoodsThunkAction.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getGoodsThunkAction.fulfilled, (state, action) => {
      const { id, data } = action.payload;
      state.isLoading = false;
      state.data[id] = data;
    });
    builder.addCase(getGoodsThunkAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default slice.reducer;
