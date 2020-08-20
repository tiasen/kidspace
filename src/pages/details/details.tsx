import React from 'react';
import { Swiper, SwiperItem, View } from '@tarojs/components';

import './details.scss';

const Details = () => {
  return (
    <View className="detail-container">
      <Swiper className="detail-slides">
        <SwiperItem>
          <View className="detail-item">1</View>
        </SwiperItem>
        <SwiperItem>
          <View className="detail-item">2</View>
        </SwiperItem>
        <SwiperItem>
          <View className="detail-item">3</View>
        </SwiperItem>
      </Swiper>
    </View>
  );
};

export default Details;
