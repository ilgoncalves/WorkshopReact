import React from 'react'
import { Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

import Home from '../pages/Home'
import OutraRota from '../pages/OutraRota'

function AppRouter() {

    return (
        <HashRouter>
            <Route path="/" exact component={Home} />
            <Route path="/outrarota" exact component={OutraRota} />
        </HashRouter>
    );
}

export default AppRouter;

