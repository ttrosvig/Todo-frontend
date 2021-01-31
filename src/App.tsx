import TodoList from './components/TodoList';

function App() {
	return (
		<div className=" flex flex-col items-center bg-blue-400 h-screen">
			<p>blue: 400, 900</p>
			<p>pink: 900</p>
			<TodoList />
		</div>
	);
}

export default App;
