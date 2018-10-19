import React, { Component } from 'react';
import './social.css';
import { postArray } from '../../../json/socialPostJson';
import Card from './subComponents/Card';
import ShimmerLoader from './subComponents/ShimmerLoader'

export default class SocialComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading : true,
			postArray : [{
				shimmer: true
			}]
		};
	}

	componentDidMount () {
		this.timeoutVar = setTimeout(()=>{
			this.setState({loading:false});
		},5000);
	}
	componentWillUnmount () {
		clearTimeout(this.timeoutVar);
	}

	getCardList () {
		return this.state.postArray.map((value,index)=>{
			let cardDiv = null;
			if (this.state.loading) {
				cardDiv = (
					<ShimmerLoader />
				);
			} else {
				cardDiv = (
					<div>
						<div>{value.textToDisplay}</div>
						<div>
							<span>Likes : {value.likes}</span>
							<span>Comments : {value.comments}</span>
							<span>Shares : {value.shares}</span>
						</div>
					</div>
				);
			}
			return (
				<Card key={`card-wrapper-${value.type}-${index}`}>
					{cardDiv}
				</Card>
			);
		})
	}

	render(){
		return (
			<div className="social-posts-wrapper">
				{this.getCardList()}
			</div>
		);
	}
}