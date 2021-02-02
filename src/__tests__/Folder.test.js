import React from 'react';
import { render } from '@testing-library/react';
import Folder from '../components/folders/Folder';
import { BrowserRouter as Router } from 'react-router-dom';

it('should render without crashing', () => {
	render(
		<Router>
			<Folder />
		</Router>
	);
});

it('should match the snapshot', () => {
	const { asFragment } = render(
		<Router>
			<Folder />
		</Router>
	);
	expect(asFragment).toMatchSnapshot();
});
