import React from 'react';
import './ShimmerLoader.css';
import CardDesign from '../subComponents/Card';

export default function ShimmerLoader () {
	return (
		<CardDesign>
			<div className="shimmer-container">
				<div className="shimmer-loader shimmer-image"></div>
				<div className="shimmer-loader shimmer-text first-text"></div>
				<div className="shimmer-loader shimmer-text second-text"></div>
				<div className="shimmer-loader shimmer-text third-text"></div>
			</div>
		</CardDesign>
	);
}