import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RouteContainer from './components/routes/RouteContainer';
import Footer from './components/Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentRoute: '/'
		};
	}

	componentDidMount () {
		if(typeof window != 'undefined') {
			let app = this;
			window.onhashchange = (event)=>{
				const currentRoute = event.newURL.split('#')[1] || '';
				app.setState({currentRoute});
			};
			const currentRoute = window.location.hash.split('#')[1] || '';
			app.setState({currentRoute});
		}
		if (typeof document != 'undefined') {
			document.getElementsByTagName('body')[0].className = 'simple-login-app';
		}
	}

	render() {
		return (
			<div className="App">
				<Header currentRoute={this.state.currentRoute} />
				<RouteContainer currentRoute={this.state.currentRoute} />
				<Footer />
				<div className="app-background" />
			</div>
		);
	}
}

export default App;
