import React from 'react';
import Slick from 'react-slick';

export default class Slider extends React.Component {
    state = {
        active: 1
    }

    defaultSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows :true,
        autoplay : false,
        autoplaySpeed: 3000,
        infinite: true,
        cssEase: 'linear',
        pauseOnFocus: false,
        useTransform: true
    }

    handleChange = (newIndex) => {
        if(this.props.showCount) {
            this.setState({
                active: newIndex + 1
            });
        }
        if(this.props.onChange) {
            this.props.onChange(newIndex);
        }
    }

    render() {
        const sliderOptions = Object.assign({}, this.defaultSettings, this.props.sliderOptions);

        return (
            <div className = "slider-wrapper">
                {this.props.showCount && this.props.children.length > 1 ? 
                    <div className = "slider-count">
                        {`${this.state.active} / ${this.props.children.length}`}
                    </div>
                :null}
                <Slick 
                    {...sliderOptions}
                    afterChange = {this.handleChange}
                    className = {this.props.className}
                    ref = {instance => this.slider = instance}
                >
                    {this.props.children}
                </Slick>
            </div>
            
        );
    }
}