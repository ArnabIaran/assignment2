import * as React from "react";
import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function NavigationBar({ location }) {

	return (
		<Navbar bg="primary" expand="lg" sticky="top" variant="dark">
			<Navbar.Brand as={Link} to="/">
				<Image
					roundedCircle
					width={60}
					height={60}
					src="images/logo.jpg"
					className="p-1 m-2"
					alt="Logo"
				/>
				E-Comm
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" activeKey={location}>
					<Nav.Link as={Link} to="/">Home</Nav.Link>
					<Nav.Link as={Link} to="/catalouge">Catalouge</Nav.Link>
					<Nav.Link as={Link} to="/search">Search Products</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">
							<FontAwesomeIcon icon="user" /> My Account
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">
						<FontAwesomeIcon icon="heart" /> Wishlist
						</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">
						<FontAwesomeIcon icon="shopping-cart" /> My Cart
						</NavDropdown.Item>
						<NavDropdown.Item href="#">
						<FontAwesomeIcon icon="credit-card" /> Checkout
						</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">
						<FontAwesomeIcon icon="sign-in-alt" /> Logout
						</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-light">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Navbar>
	);
}


export default NavigationBar;