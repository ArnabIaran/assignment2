import * as React from "react";
import { Link } from 'gatsby';

function Slide({image, url, altText}){
	return (
		<Link to={url}>
			<img
				className='d-block p-3'
				style={{height: '65vh', width: '75vw'}}
				src={image}
				alt={altText}
			/>
		</Link>
	);
}


export default Slide;
