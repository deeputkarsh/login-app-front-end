import React, { Component } from 'react';
import LoginComponent from './login/LoginComponent';
import SignupComponent from './signup/SignupComponent';
import SocialComponent from './social/PostContainer';
import NotFoundPage from './NotFoundPage';
import UnderConstruction from './UnderConstruction';

export default class RouteContainer extends Component {
	render(){
		let Container = LoginComponent;
		let routeClass = '';
		switch(this.props.currentRoute){
			case '/signup':
				//Container = SignupComponent;
				Container = UnderConstruction;
				routeClass = 'signup';
			break;
			case '/login':
				//Container = LoginComponent;
				Container = UnderConstruction;
				routeClass = 'login';
			break;
			case '/social':
				Container = SocialComponent;
				routeClass = 'social';
			break;
			case '/':
				Container = UnderConstruction;
				//Container = NotFoundPage;
				routeClass = 'home';
			break;
			default :
				Container = NotFoundPage;
				routeClass = 'not-found';
			break;
		}

		return (
			<div className={`route-holder ${routeClass}`}>
				<Container />
			</div>
		);
	}
}