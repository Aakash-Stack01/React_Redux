import React from "react";
import { render } from "react-dom";
import App from "./components/App"
import { BrowserRouter } from 'react-router-dom'
import createStore from './Redux/configureStore'
import { Provider as ReactProvider } from 'react-redux'


const store = createStore()
render(<ReactProvider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</ReactProvider>, document.getElementById("app"));
