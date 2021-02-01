import { Route, Switch } from 'react-router-dom';
import TodoList from './components/todos/TodoList';
import FolderList from './components/folders/FolderList';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/">
				<FolderList />
			</Route>
			<Route exact path="/folder/:folderId">
				<TodoList />
			</Route>
		</Switch>
	);
};

export default Routes;
