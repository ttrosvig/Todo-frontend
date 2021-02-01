import FolderList from './components/FolderList';
// import TodoList from './components/TodoList';

function App() {
	return (
		<div className="bg-blue-400 h-screen">
			<div className="flex flex-col items-center">
				<h1 className="font-bold text-white text-4xl">Todo App/Bug Tracker</h1>
				<p>blue: 400, 900</p>
				<p>pink: 900</p>
				{/* <TodoList /> */}
				<FolderList />
			</div>
		</div>
	);
}

export default App;
