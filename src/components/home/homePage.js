import React from 'react';
import { Button } from 'react-bootstrap';

class Home extends React.Component{
    render() {
				let style = {
					color: 'red',
					fontSize: 200
				};
        return (
        <div className="jumbotron">
         <h1 style={style}> Home Page </h1>
         <Button>Click me!</Button>
        </div>
         ); 
       }
    }

export default Home;