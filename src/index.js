import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import Reducer from "./store/reducer"
import {applyMiddleware, createStore} from "redux";

const store = createStore(Reducer, applyMiddleware(thunkMiddleware));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));