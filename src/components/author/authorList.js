import React from 'react';
import AuthorApi from '../../api/authorApi';

class AuthorList extends React.Component {

	render() {
		let style ={
			th:{
				fontSize: "25px"
			},
			td:{
				fontSize: "25px"
			}
		};
		let createAuthorRow = function (author) {
			return (
				<tr key={author.id}>
					<td style={style.td}><a href={"#/authors/" + author.id}>{author.id}</a></td>
					<td style={style.td}>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};
		return (
			<div>
			<table className="table">
				<thead>
					<tr>
					<th style={style.th}>ID</th>
					<th style={style.th}>NAME</th>
					</tr>
				</thead>
				<tbody>
				{this.props.authors.map(createAuthorRow,this)}
				</tbody>
			</table>
			</div>
		);
	}
}

AuthorList.propTypes = {
  authors: React.PropTypes.array.isRequired
};

export default AuthorList;