import React from 'react';
import { Image, Text, View } from '@tarojs/components';

import './categoryCard.scss';

type Props = {
  shouldRevertItem: boolean;
  onClick: () => void;
  name: string;
  image: string;
  background: string;
};

const CategoryCard: React.FC<Props> = ({ name, image, background, onClick, shouldRevertItem = false }) => {
  const items = [
    <Image key="image" mode="heightFix" src={image} />,
    <Text key="name" className="name">
      {name}
    </Text>,
  ];
  return (
    <View onClick={onClick} className="category-card" style={{ background }}>
      {shouldRevertItem ? items.reverse() : items}
    </View>
  );
};

export default CategoryCard;
