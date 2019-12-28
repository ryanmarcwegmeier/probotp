import React from 'react';
import {
    Route,
    BrowserRouter
  } from "react-router-dom";
  import Bot from '../view/Bot';
  import Ort from '../view/Ort';
  import Pokemon from '../view/Pokemon';
import Appbar from './Appbar';

export default class Routing extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <div>
              <Appbar/>
              <div className="content">
                <Route exact path="/" component={Bot}/>
                <Route path="/maps" component={Ort}/>
                <Route path="/pokemons" component={Pokemon}/>
              </div>
            </div>
          </BrowserRouter>
        );
    }
}