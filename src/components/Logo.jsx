import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'gatsby';


function Logo () {
	return (
			<Container fluid className="my-4">
				<Row className="justify-content-center">
						<Link to="/">
						<img
						src="images/logo.jpg"
						height="60px"
						width="120px"
						alt="logo"
					/>
						</Link>
				</Row>
			</Container>
	);
}

export default Logo;
