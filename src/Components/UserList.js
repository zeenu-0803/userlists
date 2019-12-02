import React from 'react'
import userData from '../usersList.json'

const UserList = () => {
  return (
    <main>
		<h1><span>My Futsa</span></h1>
    <ul>
			{userData.map((player) => (
				<li>
					<figure>
						<figcaption className="img-gallery"><img src={require(`../assets/img/${player.picturelink}`)} alt={player.name} /></figcaption>
						<figcaption className="gallery-name">{player.name}</figcaption>
						<figcaption>{player.born}</figcaption>
						<figcaption>{player.position}</figcaption>
					</figure>
				</li>
			))}
    </ul>
	</main>
  );
};

export default UserList