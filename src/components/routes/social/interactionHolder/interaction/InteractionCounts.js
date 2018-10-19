import React, {Component} from 'react';
import Likes from './LikesCounts';


export default class InteractionCounts extends Component {
	render () {
		return (
			<div className="interaction-counts">
				<Likes {...this.props.likeData} />
				<div className="comment-share-counts">
					<div className="comments-count">
						<span>{this.props.commentCount} Comments</span>
					</div>
					<div className="share-count">
						<span>{this.props.shareCount} Shares</span>
					</div>
				</div>
			</div>
		);
	}
}