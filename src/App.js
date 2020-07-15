import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux'
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom'
import { RootReducer } from "./context/RootReducer";
import thunk from "redux-thunk";
import { menuAsyncLoader } from "./context/menu/MenuState";
import {orderStoryAsyncLoader} from "./context/orderStory/OrderStoryState";
import {Main} from "./layouts/main";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
    menuAsyncLoader()
    orderStoryAsyncLoader()
    return (
      <Provider store={store}>
          <BrowserRouter>
              <Main/>
          </BrowserRouter>
      </Provider>
  );
}

export default App;

