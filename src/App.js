import React, { Component } from 'react';
import TOC from "./components/TOC";
import Subject from "./components/subject";
import Content from "./components/content";

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode:'welcome',
            Subject:{title:'WEB',sub:'구구'},
            welcome:{title:'welcome'},
            contents:[
                {id:1, title:'html',desc:'텍스트'},
                {id:2, title:'html',desc:'텍스트'}
            ]
        }
    }
    render() {
        var _title, _desc = null;
        if(this.state.mode === 'welcome'){
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        }else if(this.state.mode === 'read'){
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }

        return (
            <div className="App">
                <Subject title="비둘기" sub="구구"></Subject>
                <TOC data={this.state.contents}></TOC>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
