import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './css/app.min.css'
import Home from './Home'

ReactDOM.render(<Home/>, document.getElementById("root"));
registerServiceWorker();
