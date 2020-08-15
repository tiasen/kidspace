import React from 'react';
import { View, Button, Text } from '@tarojs/components';
import { useDidShow, useDidHide } from '@tarojs/taro';

import './index.scss';

type Props = {};

const Index: React.FC<Props> = () => {
  useDidShow(() => {
    console.log('show');
  });
  useDidHide(() => {
    console.log('hide');
  });

  return (
    <View className="index">
      <Button className="add_btn" onClick={this.props.add}>
        +
      </Button>
      <Button className="dec_btn" onClick={this.props.dec}>
        -
      </Button>
      <Button className="dec_btn" onClick={this.props.asyncAdd}>
        async
      </Button>
      <View>
        <Text>{this.props.counter.num}</Text>
      </View>
      <View>
        <Text>Hello, World</Text>
      </View>
    </View>
  );
};

export default Index;
