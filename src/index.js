import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { nba } from './nba';

ReactDOM.render(
    <div>
        <Card id={nba[0].id} name={nba[0].name} team={nba[0].team} fg={nba[0].fg}/>
        <Card id={nba[1].id} name={nba[1].name} team={nba[1].team} fg={nba[1].fg}/>
        <Card id={nba[2].id} name={nba[2].name} team={nba[2].team} fg={nba[2].fg}/>
    </div>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
