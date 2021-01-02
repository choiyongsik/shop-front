import React, { Component } from 'react';
import TOC from "./components/TOC";
import content from "./components/content";
import subject from "./components/subject";

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <subject title="비둘기" sub="구구"></subject>
                <subject title="독수리" sub="구구"></subject>
                <TOC></TOC>
            </div>
        );
    }
}

export default App;
