import { useEffect, useRef } from "react";
import "./Background.css";

export default function Background() {
	const backgroundRef = useRef(null);

	

	return (
		<>
			<div id='background' ref={backgroundRef}>
				<video autoPlay loop muted poster='public/splash_frame.jpg'>
					<source src='public/splash.mp4' type='video/mp4' />
				</video>
				<div className='shade'></div>
			</div>
		</>
	);
}
