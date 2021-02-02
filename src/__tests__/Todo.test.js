import React from 'react';
import { render } from '@testing-library/react';
import Todo from '../components/todos/Todo';

it('should render without crashing', () => {
	render(<Todo />);
});

it('should match the snapshot', () => {
	const { asFragment } = render(<Todo />);
	expect(asFragment).toMatchSnapshot();
});
