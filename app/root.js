/**
 * Created by HULL on 2017/5/24.
 */
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configure-store';

import HomeScreen from './Containers/HomeScreen';
const store = configureStore();

class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HomeScreen />
            </Provider>
        )
    }
}

export default Root;