import FolderList from './components/FolderList';
// import TodoList from './components/TodoList';

function App() {
	return (
		<div className="bg-blue-400 h-screen">
			<div className="flex flex-col items-center">
				<h1 className="font-bold text-white text-4xl my-4">Todo App/Bug Tracker</h1>
				{/* <TodoList /> */}
				<FolderList />
			</div>
		</div>
	);
}

export default App;
