import Background from "./components/Background";
import SplashText from "./pages/splash/SplashText";
import AboutMe from "./pages/about_me/AboutMe";
import Links from "./pages/links/Links";

import Header from "./components/Header";
import MenuDialog from "./components/MenuDialog";
import { SiteContextProvider } from "./components/SiteContext";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

export default function App() {
	return (
		<>
			<Background />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SplashText/>} />
					<Route path="/about_me" element={<AboutMe />} />
					<Route path="/links" element={<Links />} />
				</Routes>
				<SiteContextProvider>
					<Header />
					<MenuDialog />
				</SiteContextProvider>
			</BrowserRouter>
		</>
	);
}
