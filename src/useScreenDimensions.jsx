import React, {useEffect, useState} from 'react';

const useScreenDimensions = () => {
	const [screenWidth, setScreenWidth] = useState();
	const [screenHeight, setScreenHeight] = useState();

	useEffect(function getScreenDimensions() {
		setScreenWidth(window.innerWidth);
		setScreenHeight(window.innerHeight);
	}, []);

	return {
		screenWidth,
		screenHeight,
	};
}

export default useScreenDimensions;