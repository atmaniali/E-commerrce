import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import App from './App'
import './index.css'
import store from './app/store'
import { fetchPosts } from './feautures/product/productSlice'



store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element = {<App />}
          ></Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
)

