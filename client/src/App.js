// import './assets/css/main.css';
import pages from './pages/pageIndex.js';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet,
} from 'react-router-dom';
import AppBar from './components/AppBar.js';
import './assets/styles/main.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		element: (
			<>
				<AppBar />
			</>
		),
		children: [
			{
				path: '/',
				element: <pages.Homepage />,
			},
			{
				path: '/addrecipe',
				element: <pages.AddRecipe />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
