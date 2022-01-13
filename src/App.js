import MovieCard from "./components/MovieCard/MovieCard";
import Input from "./components/Input/Input";
import Navigation from "./components/Header/Navigation";
import {Switch, Route} from 'react-router-dom';
import './App.css';
import React from "react";

function App() {
    return (
        <>
            <Navigation/>
            <Input/>
            <Switch>
                <Route path="/shows/:id" component={MovieCard}/>
            </Switch>
        </>
    );
}

export default App;
