import React, {Component} from 'react';
import Slider from '../../commonComponents/Slider';

export default class Image extends Component{

    render(){
        var imagesList = [];
        imagesList = this.props.subPost.images.map((item, index)=>{
            return (
                <img 
                    src = {item} 
                    key = {index}
                ></img>
            );
        });
        return (
            <Slider 
                className = "img-post-container"
                showCount = {true}
            >
                {imagesList}
            </Slider>
        );
    }



}