import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

const Navbar = () => {

	const { user, dispatch } = useContext(AuthContext)

	const navigate = useNavigate();

	const handleLogOut = () => {

		dispatch({ type: types.logout })
		navigate('/login', {
			replace: true
		})
	}

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">

			<Link className="navbar-brand" to="/">
				My Hero App
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					{/* <NavLink to='/' className={({ isActive }) => isActive? "nav-link active": 'nav-link'}> Home </NavLink> */}

					<NavLink
						className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}
						to="/marvel">
						Marvel
					</NavLink>

					<NavLink
						className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}
						to="/dc">
						DC
					</NavLink>

					<NavLink
						className={({ isActive }) => isActive ? "nav-link active" : 'nav-link'}
						to="/search">
						Busqueda!
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
				<ul className="navbar-nav ml-auto">
					<span className='nav-item nav-link text-info'>
						{user.name}
					</span>
					<button
						className="nav-item nav-link btn"
						to="/login" onClick={handleLogOut}>
						Log out
					</button>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;