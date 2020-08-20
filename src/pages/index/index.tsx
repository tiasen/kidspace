import React, { useCallback } from 'react';
import { View } from '@tarojs/components';
import { useDidShow, useDidHide, redirectTo } from '@tarojs/taro';

import { CategoryCard } from '../../components/CategoryCard';

import './index.scss';
import { Pages } from '../../app.config';

type Props = {};

const Index: React.FC<Props> = () => {
  const categoryList = [1, 2, 3, 4, 5, 6];
  useDidShow(() => {
    console.log('show');
  });
  useDidHide(() => {
    console.log('hide');
  });

  const goToDetailsPage = useCallback(() => {
    redirectTo({
      url: Pages.Details,
    });
  }, []);

  return (
    <View className="index">
      {categoryList.map((item) => (
        <View key={item} className="category-card-wrapper">
          <CategoryCard onClick={goToDetailsPage} shouldRevertItem={item % 2 === 0} />
        </View>
      ))}
    </View>
  );
};

export default Index;
