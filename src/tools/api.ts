import { getDB } from './cloud';
import { StorageKeys } from '../constants';
import { Category } from '../pages/index/reducer';
import { Goods } from '../pages/details/reducer';

const CATEGORY_COLLECTION_NAME = 'category';
const GOODS_COLLECTION_NAME = 'goods';

export const setStorage = <T>(key: string, value: T) => {
  return new Promise<{ errMsg: string }>((resolve, reject) => {
    wx.setStorage({ key, data: value, success: resolve, fail: reject });
  });
};

export const getStorage = <T>(key: string) => {
  return new Promise<T>((resolve, reject) => {
    wx.getStorage({ key, success: (res) => resolve(res.data), fail: reject });
  });
};

export const isWxErrMsgSuccess = (msg: string) => {
  return msg.endsWith('ok');
};

export type CloudFunctionResult<T> = {
  errMsg: string;
  result: T;
};

export type CloudFunctionGetOpenIdResult = CloudFunctionResult<{
  openid: string;
  appid: string;
}>;

export type CloudQueryResult<T> = {
  errMsg: string;
  data: T;
};

export const getOpenId = async () => {
  const callFunctionResult = (await wx.cloud.callFunction({
    // 云函数名称
    name: 'getOpenId',
    // 传给云函数的参数
    data: {},
  })) as CloudFunctionGetOpenIdResult;
  const { errMsg, result } = callFunctionResult;

  return new Promise<true | string>(async (resolve, reject) => {
    if (isWxErrMsgSuccess(errMsg)) {
      const msg = await setStorage(StorageKeys.OPENID, result.openid);
      if (isWxErrMsgSuccess(msg.errMsg)) {
        resolve(true);
      } else {
        reject(msg);
      }
    } else {
      reject(errMsg);
    }
  });
};

export const getCachedOpenId = async () => {
  return await getStorage<string>(StorageKeys.OPENID);
};

export const setTitle = (title) => {
  wx.setNavigationBarTitle({
    title,
  });
};

export const getCategoryList = (): Promise<CloudQueryResult<Category[]>> => {
  return getDB().collection(CATEGORY_COLLECTION_NAME).get();
};

export const getGoodsById = (id): Promise<CloudQueryResult<Goods[]>> => {
  return getDB()
    .collection(GOODS_COLLECTION_NAME)
    .where({
      categoryId: id,
    })
    .get();
};
