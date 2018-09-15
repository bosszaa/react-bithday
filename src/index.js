import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'
import App_container from './App_container'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer
)

const HocProvider = (props) => (
    <Provider store = {store}>
        <App_container>
            <App/>
        </App_container>
    </Provider>
)

ReactDOM.render(<HocProvider />, document.getElementById('root'));
registerServiceWorker();
