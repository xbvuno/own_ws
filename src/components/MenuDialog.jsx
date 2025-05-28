import { useContext } from "react";
import { SiteContext } from "./SiteContext";
import { Link } from "react-router-dom";

import "./MenuDialog.css";

function MenuVoice({ link, children }) {
	const { changeCurrentPage } = useContext(SiteContext);
	return (
		<>
			<h1>
				&emsp;{"void "}
				<Link onClick={changeCurrentPage} to={"/" + link}>
					{children || link}
				</Link>
				{" {}"}
			</h1>
		</>
	);
}

export default function MenuDialog() {
	const { menuDialogRef } = useContext(SiteContext);

	return (
		<>
			<div id='menu' ref={menuDialogRef}>
				<h1>
					namespace <b>bvuno</b> {"{"}
				</h1>
				<MenuVoice link='about_me' />
				<MenuVoice link='links' />
				<MenuVoice link=''>splash</MenuVoice>
				<h1>{"}"}</h1>
			</div>
		</>
	);
}
