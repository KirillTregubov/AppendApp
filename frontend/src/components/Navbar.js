import React, { useState, useEffect, useContext } from 'react';
import { HomeIcon, UserGroupIcon } from '@heroicons/react/solid';
import UserContext from '../hooks/UserContext';
import CustomLink from './CustomLink';
import CommunityLink from './CommunityLink';

export default function Navbar(props) {
	const user = useContext(UserContext);
	const [enrolledCommunities, setEnrolledCommunities] = useState(null);

	useEffect(() => {
		// Enrolled Communities need to be fetched from backend
		setEnrolledCommunities([
			{
				path: 'csc309',
				name: 'CSC309',
				description: "This course provides an introduction to the technologies used for developing Web applications. We discuss technologies for static and dynamic content generation, including N-tier, MVC architectures, and mobile supported web development. We also cover general web design principles, security, and web performance.",
				memberCount: 1012,
				imageUrl: 'communities/csc309.jpg'
			},
			{
				path: 'AnimeClub',
				name: 'Anime Club',
				description: "U of T's largest anime club. We have weekly meetings but feel free to make a post on the forum.",
				memberCount: 1998,
				imageUrl: 'communities/anime.jpg'
			},
			{
				path: 'WebDevClub',
				name: 'Web Dev Club',
				description: "U of T's largest anime club. We have weekly meetings but feel free to make a post on the forum.",
				memberCount: 405,
				imageUrl: 'communities/webdev.jpg'
			}
		]);
	}, []);

	return (
		<nav className="navigation">
			<div>
				<div>
					<ul>
						<li>
							<CustomLink to="/"><HomeIcon /><span>Home</span></CustomLink>
						</li>
						<li>
							<CustomLink to="/friends"><UserGroupIcon /> Friends</CustomLink>
						</li>
						{user.username === 'admin' && (
							<li>
								<CustomLink to="/admin">Admin Page</CustomLink>
							</li>
						)}
					</ul>
				</div>
				<div className="groupContainer">
					<h1 className="subtleHeading">Your Communities</h1>
					{enrolledCommunities && enrolledCommunities.map((group, index) =>
						<CommunityLink key={index} path={group.path} name={group.name} imageUrl={group.imageUrl} />
					)}
				</div>
			</div>
		</nav>
	);
}