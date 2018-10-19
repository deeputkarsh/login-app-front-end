import React, {Component} from 'react';
import Count from "./interaction/InteractionCounts";
import LikeAction from "./interaction/LikeAction";


export default class InteractionContainer extends Component {
	render () {
		return (
			<div>
				<Count />
				<div>
					<LikeAction />
					<div className="comment-icon"></div>
					<div className="share-icon"></div>
				</div>
			</div>
		);
	}
}