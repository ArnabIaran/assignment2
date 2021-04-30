import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faUser,
	faHeart,
	faSignInAlt,
	faCreditCard,
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
import NavigationBar from './Navigation';
library.add(faUser, faHeart, faSignInAlt, faCreditCard, faShoppingCart);


export default function Layout({children, location, miniCarousel=null}) {
	return (
		<>
		<NavigationBar location={location} miniCarousel={miniCarousel}/>
		{children}
		</>
	);
}

// export default Layout;