import * as React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Slide from "./Slide";
import './css/SliderArea.css'
import {nanoid} from 'nanoid';

function SliderArea ({carouselProps}){
	const interval = 3357;
	return (
		<Carousel fade>
		{
			carouselProps.map(({heroSrc, url, heading, subHeading, altText}) => (
				<Carousel.Item interval={interval} key={nanoid()}>
					<Slide image={heroSrc} url={url} altText={altText}/>
					<Carousel.Caption>
						<div className="float-md-right caption p-2">
							<h1
								className="text-dark display-4"
							>
								{heading}
							</h1>
							<p
								className="lead text-muted"
							>
								{subHeading}
							</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			))
		}
		</Carousel>
	);
}

export default SliderArea;
