import { useContext } from "react";
import { SiteContext } from "./SiteContext";

import "./Hamburger.css";

export default function Hamburger() {
	const { hamburgerRef, toggleMenu } = useContext(SiteContext);

	return (
		<svg
			id='ham'
			ref={hamburgerRef}
			viewBox='10 10 80 80'
			onClick={toggleMenu}
		>
			<path
				className='line top'
				d='m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013'
			/>
			<path className='line middle' d='m 70,50 h -40' />
			<path
				className='line bottom'
				d='m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40'
			/>
		</svg>
	);
}
