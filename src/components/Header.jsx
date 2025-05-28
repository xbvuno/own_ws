import { useContext } from "react";
import { SiteContext } from "./SiteContext";

import Hamburger from "./Hamburger";

import "./Header.css";

export default function Header() {
	const {headerText, headerTextRef} = useContext(SiteContext)

	return (
		<>
			<header className='container-fluid'>
				<div>
					<b>bvuno</b>
					<strong ref={headerTextRef} className='contrast'>::{headerText}</strong>
				</div>
				<div>
					<Hamburger />
				</div>
			</header>
			<div className='small-shade'></div>
			<div className='small-shade flipped'></div>
		</>
	);
}
