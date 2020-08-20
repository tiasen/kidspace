import React from 'react';
import { View } from '@tarojs/components';

import './app.scss';

// const App = () => <Provider store={store}>{this.props.children}</Provider>;
const App = ({ children }) => <View>{children}</View>;

export default App;
