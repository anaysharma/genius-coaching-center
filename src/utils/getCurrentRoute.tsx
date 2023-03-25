import { useLocation } from 'react-router-dom';

function getCurrentRoute(): String {
	const location = useLocation();
	const currentPath = location.pathname.toString().substring(1);
	return currentPath;
}

export default getCurrentRoute;
