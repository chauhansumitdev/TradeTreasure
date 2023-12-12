import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import Sell from './Sell';
import ReachUs from './ReachUs';
import Search from './Search';
import LoginSignup from "./LoginSignup";
import Login from './LoginSignup/Login';
import Signup from './LoginSignup/Signup';

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
					<Link to="/login-signup" onClick={showNavbar}>Login/Signup</Link>
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
				<Route path="/login-signup" element={<LoginSignup />} />
        		<Route path="/login" element={<Login />} />
       		 	<Route path="/signup" element={<Signup />} />
			</Routes>
		</Router>
	);
}

export default Navbar;