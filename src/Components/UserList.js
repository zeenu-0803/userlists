import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { loadUserLists } from '../actions/actions.js';

export class UserList extends Component {
	componentDidMount() {
		const { dispatchLoadUserLists } = this.props;
		dispatchLoadUserLists();
	}

	render() {
		const {
			userLists
		} = this.props;
		return (
			<main>
				<h1><span>My Blog</span></h1>
				<ul>
					{userLists.map((user) => (
						<li>
							<figure>
								<figcaption className="img-gallery">
									<img src={`${user.avatar_url}`} alt={user.login} width="80" height="80" />
								</figcaption>
								<figcaption className="gallery-name">{user.login}</figcaption>
								<figcaption>{user.type}</figcaption>
								<figcaption>{user.site_admin}</figcaption>
							</figure>
						</li>
					))}
				</ul>
			</main>
		);
	}
}

UserList.propTypes = {
  userLists: PropTypes.objectOf.isRequired,
  dispatchLoadUserLists: PropTypes.func.isRequired
};

export const mapStateToProps = state => ({
	userLists: state.userLists.users
});

const mapDispatchToProps = {
	dispatchLoadUserLists: loadUserLists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)