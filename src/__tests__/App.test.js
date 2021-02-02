import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { BrowserRouter as Router } from 'react-router-dom';

it('should render without crashing', () => {
	render(
		<Router>
			<App />
		</Router>
	);
});
