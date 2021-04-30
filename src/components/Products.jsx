import * as React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { ProductTile, ProductListItem } from './Product';
import { nanoid } from 'nanoid';

export default function Products({products, variant, ...props}) {
	return (
		<ListGroup horizontal {...props}>
			{
				products.map((product) => (
					<ListGroup.Item key={nanoid()} {...props.itemProps}>
						{
							variant === 'tile' ? 
								<ProductTile {...product} /> :
								<ProductListItem {...product} />
						}
					</ListGroup.Item>
				))
			}
		</ListGroup>
	);
}