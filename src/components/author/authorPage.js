import React from 'react';
import AuthorApi from '../../api/authorApi';
import AuthorList from './authorList';

class AuthorPage extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
           authors:[]
        };
    }
	
	componentWillMount() {
		this.setState({authors:AuthorApi.getAllAuthors()});
	}

	render() {
		return (
			<div>
			<h1>Author's List</h1>
			<AuthorList authors={this.state.authors} />
			</div>
		);
	}
}

export default AuthorPage;