import React, { createContext, useState, useRef, useEffect } from "react";
import { useLocation } from 'react-router-dom';

const SiteContext = createContext();

const SiteContextProvider = ({ children }) => {
	const hamburgerRef = useRef(null);
	const menuDialogRef = useRef(null);
	const headerTextRef = useRef(null)

	const location = useLocation();

	const [menuOpen, setMenuOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(location.pathname.substring(1) || 'splash');
	const [headerText, setHeaderText] = useState(currentPage);


	useEffect(() => {
		headerTextRef.current.classList.add('glitch')
		setTimeout(() => {
			setHeaderText(menuOpen ? 'menu' : currentPage);
			setTimeout(() => {
				headerTextRef.current.classList.remove('glitch')
			}, 200)
		}, 200)
	}, [currentPage, menuOpen])

	const toggleMenu = () => {
		if (hamburgerRef) hamburgerRef.current.classList.toggle("active");
		if (menuDialogRef) menuDialogRef.current.classList.toggle("shown");

		setMenuOpen(!menuOpen);
	};

	const changeCurrentPage = (e) => {
		setCurrentPage(e.target.innerText);
		if (menuOpen) toggleMenu();
	};

	return (
		<SiteContext.Provider
			value={{
				headerText,
				hamburgerRef,
				menuDialogRef,
				headerTextRef,
				toggleMenu,
				changeCurrentPage,
			}}
		>
			{children}
		</SiteContext.Provider>
	);
};

export { SiteContext, SiteContextProvider };
