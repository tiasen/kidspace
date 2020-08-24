import React, { useEffect } from 'react';

import './app.scss';
// import { getOpenId } from './tools/api';
import { init } from './tools/cloud';
import { Provider } from 'react-redux';
import store from './store';

init();

const App = ({ children }) => {
  useEffect(() => {
    // getOpenId();
  }, []);
  return <Provider store={store}>{children}</Provider>;
};

export default App;
