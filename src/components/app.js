import React from 'react';
import Header from './common/header';
import $ from 'jquery';
let RouteHandler = require('react-router').RouteHandler;

class App extends React.Component{
	render() {
		return(
			<div>
				<Header />
				<div className="container-fluid">
					<RouteHandler />
				</div>
			</div>
		);
	}
}

export default App;