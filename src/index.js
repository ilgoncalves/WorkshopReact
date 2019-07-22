import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './settings/theme'
import { ThemeProvider } from '@material-ui/styles';
import Routes from './settings/routes'


import reducers from './reducers'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducers)

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Routes />
            </Provider>
        </ThemeProvider>

    )
}

ReactDOM.render(<App />, document.getElementById('root'));
