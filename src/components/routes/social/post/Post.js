import React, {Component} from 'react';
import Text from "./subPost/Text";
import Image from "./subPost/Image";
import Products from "./subPost/Products";
import CardDesign from '../subComponents/Card';
import MoreOptions from "../commonComponents/MoreOptions";
import HiddenMsg from '../commonComponents/HiddenMsg';
import Interactions from '../interactionHolder/InteractionContainer';

export default class Post extends Component{
    state = {
        postStatus: 'shown'
    }

    onPopoverClick = (type='') => {
        switch(type) {
            case 'hide':
                this.setState({
                    postStatus: 'hidden'
                });
            break;
            case 'remove':
                console.log('remove called');
            break;
            case 'unhide':
                this.setState({
                    postStatus: 'shown'
                });
            break;
        }
    }

    getSubPost = () => {
        var subPost = null;
        switch(this.props.type){
            case 'images':
                subPost = <Image {...this.props} />;
            break;
            case 'products':
                subPost = <Products {...this.props} />;
            break;
            default :
                subPost = null;
        }
        return subPost;
    }

    getInteractions = () => {
        const interactionProps = {};
        return (<Interactions {...interactionProps} />);
    }

    render(){
        var TextPart = this.props.text ? <Text text={this.props.text}/>: null;
        const isHidden = this.state.postStatus == 'hidden';

        return (
            <CardDesign className={`post-holder ${isHidden ? 'hidden-post' : ''}`}>
                <MoreOptions 
                    onItemClick = {this.onPopoverClick}
                    options = {isHidden ? ['unhide', 'remove'] : ['hide', 'remove']}
                />
                {isHidden ? 
                    <HiddenMsg />
                :null}
                {this.getSubPost()}
                {TextPart}
                {this.getInteractions()}
            </CardDesign>
        );
    }



}