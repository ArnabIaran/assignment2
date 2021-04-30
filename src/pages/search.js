import * as React from "react";
import Search from '../components/Search';
import Dummy from '../dummy_data.json';

const SearchPage = () => (
	<>
	<Search {...Dummy} />
	</>
);

export default SearchPage;