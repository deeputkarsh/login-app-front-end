import React, {Component} from 'react';
import Post from "./post/Post";
import { postArray } from '../../../json/socialPostJson';
import ShimmerLoader from './subComponents/ShimmerLoader';
import './social.css';
//import "../slick-carousel/slick/slick.css";
//import "../slick-carousel/slick/slick-theme.css";
import './styles/social.scss';


export default class PostContainer extends Component{

    constructor(props) {
        super(props);
        const defaultPostArray = [];
        for (let i = 9; i >= 0; i--) {
            defaultPostArray.push({
                shimmer: true
            });
        }
        this.state = {
            postArray : defaultPostArray
        };
    }

    componentDidMount () {
        this.timeoutVar = setTimeout(()=>{
            this.setState({postArray: postArray});
        },5000);
    }
    componentWillUnmount () {
        clearTimeout(this.timeoutVar);
    }

    getPostList(){
        return this.state.postArray.map((item, index)=>{
            if (item.shimmer) {
                return (
                    <ShimmerLoader />
                );
            } else {
                return (
                    <Post 
                        {...item} 
                        baseUrl = {'localhost:3016'}
                        key = {`post-${index}`}
                    />
                );
            }
        });
    }
    
    render(){

        return (
            <div className="social-posts-wrapper post-list-container jd-font-roboto">
                {this.getPostList()}
            </div>
        );
    }

}