import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>Start</div>, document.getElementById('app'));

if (module.hot) {
    module.hot.accept()  

    module.hot.addStatusHandler(status => {
        if (status === 'prepare') console.clear()
    })
}
