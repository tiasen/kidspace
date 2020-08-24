import React, { useCallback, useEffect } from 'react';
import { View } from '@tarojs/components';
import { redirectTo } from '@tarojs/taro';
import { AtActivityIndicator } from 'taro-ui';
import { CategoryCard } from '../../components/CategoryCard';
import { Pages } from '../../app.config';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CategoryState, getCategoryThunkAction } from './reducer';

import './index.scss';

type Props = {};

const Index: React.FC<Props> = () => {
  const { list: categoryList, isLoading } = useSelector<RootState, CategoryState>((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!categoryList || categoryList?.length === 0) {
      dispatch(getCategoryThunkAction());
    }
  }, [dispatch, categoryList]);

  const goToDetailsPage = useCallback((id, name) => {
    redirectTo({
      url: `${Pages.Details}?id=${id}&name=${name}`,
    });
  }, []);

  return (
    <View className="index">
      <AtActivityIndicator mode="center" isOpened={isLoading} />
      {!isLoading &&
        categoryList.map((item, index) => (
          <View key={item._id} className="category-card-wrapper">
            <CategoryCard
              name={item.name}
              image={item.image}
              background={item.background}
              onClick={() => goToDetailsPage(item._id, item.name)}
              shouldRevertItem={index % 2 === 0}
            />
          </View>
        ))}
    </View>
  );
};

export default Index;
