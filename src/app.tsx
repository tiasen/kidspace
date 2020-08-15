import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';
import store from './store';

const App = () => <Provider store={store}>{this.props.children}</Provider>;

export default App;
