import { useEffect, useRef } from "react";

import "./SplashText.css";

const EFFECT_TRIGGER_RND_MAX = 1000;
const EFFECT_LAST_RND_MAX = 500;
const EFFECT_N = 12;

export default function SplashText() {
	const SplashTextRef = useRef();

	function addRandomEffect(effect_class) {
		SplashTextRef.current.classList.add(effect_class);
	}

	function remRandomEffect(effect_class) {
		SplashTextRef.current.classList.remove(effect_class);
	}

	function updateRandomEffects() {
		const effect_n = Math.floor(Math.random() * EFFECT_N);
		const effect_class = "rnd-effect-" + effect_n;
		addRandomEffect(effect_class);

		setTimeout(() => {
			if (!SplashTextRef.current) return;
			remRandomEffect(effect_class);
		}, Math.floor(Math.random() * EFFECT_LAST_RND_MAX));
	}

	useEffect(() => {
		const scaleText = () => {
			if (!SplashTextRef.current) return;
			const vw_scale = window.innerWidth;
			SplashTextRef.current.style.setProperty(
				"--vw-scale",
				`${vw_scale}`
			);
		};
		window.addEventListener("resize", scaleText);

		setRandomInterval(() => {
			updateRandomEffects();
		}, EFFECT_TRIGGER_RND_MAX);

		return () => {
			clearRandomInterval();
			window.removeEventListener("resize", scaleText);
		};
	}, []);

	return (
		<>
			<div id='splash-text'>
				<div ref={SplashTextRef}>
					<p>using namespace</p>
					<h1>bvuno</h1>
					<p>;</p>
				</div>
			</div>
		</>
	);
}

let randomEffectLastID = 0;
function setRandomInterval(func, max_random_ms) {
	const rnd_ms = Math.floor(Math.random() * max_random_ms);
	randomEffectLastID = setTimeout(() => {
		func();
		setRandomInterval(func, max_random_ms);
	}, rnd_ms);
}

function clearRandomInterval() {
	clearTimeout(randomEffectLastID);
}
