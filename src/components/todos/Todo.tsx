interface ITodo {
	description: string;
	completed: boolean;
	id: number;
	folder_id: number;
}

interface ITodoProps {
	todo: {
		description: string;
		completed: boolean;
		id: number;
		folder_id: number;
	};

	functions: {
		toggleTodo: (todo: ITodo) => void;
		deleteTodo: (id: number) => Promise<any>;
	};
}

const Todo = ({ todo, functions }: ITodoProps) => {
	return (
		<div className="flex flex-row justify-between items-center p-2 bg-blue-900 rounded my-2 shadow-md hover:bg-pink-900 transition delay-100">
			<div className="font-bold text-white">
				<p className={todo.completed ? 'line-through' : 'no-underline'}>{todo.description}</p>
			</div>

			<div className="flex flex-row jusify-center items-center mx-2">
				<input
					type="checkbox"
					className="h-5 w-5 mx-1"
					onChange={() => functions.toggleTodo(todo)}
					checked={todo.completed}
				/>
				{todo.completed ? (
					<button
						className="py-2 px-3 ml-2 bg-gradient-to-r to-blue-900 from-pink-900 rounded"
						onClick={() => functions.deleteTodo(todo.id)}
					>
						<i className="fas fa-trash text-white" />
					</button>
				) : null}
			</div>
		</div>
	);
};

export default Todo;
