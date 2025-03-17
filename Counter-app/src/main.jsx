import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(

  // Wraps the app with redux store.
  <Provider store={store}> 
      <App/>
  </Provider>
  //Makes the Redux store available to components
)
