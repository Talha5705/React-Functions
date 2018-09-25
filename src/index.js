import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const element=<Welcome name="Talha"/> /* ekta variable element create korlam jetar vetor
                                          name property er value ache*/

function Welcome(props){
    return <h1>Hello Mr. {props.name}</h1>
}

ReactDOM.render(element, document.getElementById('root'));
registerServiceWorker();
