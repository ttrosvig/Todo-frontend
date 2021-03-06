import Routes from './Routes';

function App() {
	return (
		<div className="bg-blue-200 h-screen">
			<div className="flex flex-col items-center">
				<h1 className="font-bold text-blue-900 text-4xl my-4">To-do App/Bug Tracker</h1>
				<Routes />
			</div>
		</div>
	);
}

export default App;
