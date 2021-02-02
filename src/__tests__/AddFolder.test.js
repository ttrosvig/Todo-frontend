import React from 'react';
import { render } from '@testing-library/react';
import AddFolder from '../components/folders/AddFolder';

it('should render without crashing', () => {
	render(<AddFolder />);
});
