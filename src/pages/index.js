import * as React from "react";

import Carousel from '../components/SliderArea';
import Products from '../components/Products';
import Dummy from '../dummy_data.json';

function App() {
	return (
		<>
			<Products
				variant="list"
				horizontal={false}
				products={Dummy.products.sort(
					({rating}, other) => rating - other.rating
				).slice(0, 7)}
			/>
			<Carousel {...Dummy} />
		</>
	);
}

export default App;
