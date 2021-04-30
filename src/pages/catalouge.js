import * as React from "react";
import Carousel from '../components/SliderArea';
import Products from '../components/Products';
import Dummy from '../dummy_data.json';


const ProductsPage = () => (
	<>
		<Products
			products={Dummy.products}
			variant="tile"
			className="flex-wrap"
			itemProps={{
				className: "w-25 bg-dark"
			}}
		/>
		<Carousel {...Dummy} />
	</>
);

export default ProductsPage;