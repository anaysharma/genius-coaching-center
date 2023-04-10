import { useRouter } from 'next/router';

function useCurrentRoute(): String {
	const location = useRouter();
	const currentPath = location.pathname.toString().substring(1);
	return currentPath;
}

export default useCurrentRoute;
