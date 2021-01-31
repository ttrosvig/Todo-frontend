interface TodoProps {
	todo: {
		description: string;
		completed: boolean;
	};
	functions: {
		toggleTodo: (description: string) => void;
		deleteTodo: (description: string) => void;
	};
}

const Todo = ({ todo, functions }: TodoProps) => {
	return (
		<div className="flex flex-row justify-between items-center border-2 border-blue-900 p-1 bg-blue-400 rounded my-2 shadow-md hover:bg-pink-900 transition delay-100">
			<div className="font-bold text-white">
				<p className={todo.completed ? 'line-through' : 'no-underline'}>{todo.description}</p>
			</div>

			<div className="flex flex-row jusify-center items-center mx-2">
				<input type="checkbox" className="h-5 w-5 mx-1" onChange={() => functions.toggleTodo(todo.description)} />
				{todo.completed ? (
					<button className="py-2 px-3 bg-blue-900 rounded" onClick={() => functions.deleteTodo(todo.description)}>
						<i className="fas fa-trash text-white" />
					</button>
				) : null}
			</div>
		</div>
	);
};

export default Todo;
