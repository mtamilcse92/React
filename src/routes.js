import React from 'react';
import Router from 'react-router';
let DefaultRouter = Router.DefaultRouter;
let Route = Router.Route;

class App extends React.Component {
  render () {
    return (
    <Route name="app" path="/" handler={require("./components/app")} >
	<DefaultRouter handler={require("./components/home/homePage")} />
	<Route name="authors" handler={require("./components/home/homePage")} />
	<Route name="about" handler={require("./components/about/aboutPage")} />
	</Route>
    );
  }
}

export default App;