import React, { Component } from 'react';

import { Provider } from 'react-redux';
import store from './store';

import Test from './components/Test';

class App extends Component {

    render(){
        return(
            <Provider store={store}>
                <div>
                    Hello React
                    <Test />
                </div>
            </Provider>
        );
    }

}

export default App;