import React from 'react';
import { Image, Text, View } from '@tarojs/components';

import './categoryCard.scss';

type Props = {
  shouldRevertItem: boolean;
  onClick: () => void;
};

const CategoryCard: React.FC<Props> = ({ onClick, shouldRevertItem = false }) => {
  const items = [
    <Image key="image" mode="heightFix" src="https://img95.699pic.com/element/40127/3099.png_860.png" />,
    <Text key="name" className="name">
      交通工具
    </Text>,
  ];
  return (
    <View onClick={onClick} className="category-card">
      {shouldRevertItem ? items.reverse() : items}
    </View>
  );
};

export default CategoryCard;
