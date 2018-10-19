import React, {Component} from 'react';

export default class Text extends Component{

    render(){
        return (
            <div className="post-text">
                {this.props.text}
            </div>
        );
    }



}