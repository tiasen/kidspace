import React, { useEffect } from 'react';
import { useRouter, useReady } from '@tarojs/taro';
import { Image, Swiper, SwiperItem, View } from '@tarojs/components';
import config from './details.config';

import './details.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getGoodsThunkAction, GoodsState } from './reducer';
import { setTitle } from '../../tools/api';
import { AtActivityIndicator } from 'taro-ui';

export type GoodsPageParams = {
  id: string;
  name: string;
};

const Details = () => {
  const { data, isLoading } = useSelector<RootState, GoodsState>((state) => state.goods);
  const { params } = useRouter<GoodsPageParams>();
  const dispatch = useDispatch();
  const id = params.id;
  const list = data[id] || [];

  useEffect(() => {
    params.name && setTitle(params.name);
  }, [params.name]);

  useReady(() => {
    if (id && !data[id]) {
      dispatch(getGoodsThunkAction(id));
    }
  });
  return (
    <View className="detail-container">
      <AtActivityIndicator mode="center" isOpened={isLoading} />
      {!isLoading && (
        <Swiper className="detail-slides">
          {list.map((item) => (
            <SwiperItem key={item._id}>
              <View className="detail-item">
                {item.name}
                <View className="details-item-image">
                  <Image mode="aspectFit" src={item.image} />
                </View>
              </View>
            </SwiperItem>
          ))}
        </Swiper>
      )}
    </View>
  );
};

Details.config = config;

export default Details;
