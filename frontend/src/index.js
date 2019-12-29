import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { App } from './app'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('app')
)

if (module.hot) {
    module.hot.accept()

    module.hot.addStatusHandler(status => {
        if (status === 'prepare') console.clear()
    })
}
