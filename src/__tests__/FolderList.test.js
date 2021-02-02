import React from 'react';
import { render } from '@testing-library/react';
import FolderList from '../components/folders/FolderList';

it('should render without crashing', () => {
	render(<FolderList />);
});

it('should match the snapshot', () => {
	const { asFragment } = render(<FolderList />);
	expect(asFragment).toMatchSnapshot();
});
