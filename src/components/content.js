import React, { Component } from 'react';


class content extends Component {
    render(){
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

export default content;
