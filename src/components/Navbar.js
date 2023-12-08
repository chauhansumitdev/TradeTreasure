import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import Sell from './Sell';
import ReachUs from './ReachUs';
import Search from './Search';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<Router>
			<header>
				<h3>TradeTreasure</h3>
				<nav ref={navRef}>
					<Link to="/" onClick={showNavbar}>Home</Link>
					<Link to="/search" onClick={showNavbar}>Search</Link>
					<Link to="/sell" onClick={showNavbar}>Sell</Link>
					<Link to="/reach-us" onClick={showNavbar}>Reach Us</Link>
					<Link to="/" onClick={showNavbar}>Login</Link>
					<Link to="/" onClick={showNavbar}>Signup</Link>
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<button
					className="nav-btn"
					onClick={showNavbar}>
					<FaBars />
				</button>
			</header>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/search" element={<Search />} />
				<Route path="/sell" element={<Sell />} />
				<Route path="/reach-us" element={<ReachUs />} />
				<Route path="/" element={<Home />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default Navbar;