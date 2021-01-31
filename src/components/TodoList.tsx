import AddTodo from './AddTodo';
import Todo from './Todo';
import { useState } from 'react';

interface TodoItem {
	description: string;
	completed: boolean;
}

const TodoList = () => {
	const [ todoItems, setTodoItems ] = useState<TodoItem[]>([]);

	const saveTodo = (todo: string): void => {
		let currentTodos = [ ...todoItems, { description: todo, completed: false } ];

		setTodoItems(currentTodos);
	};

	const findItem = (description: string) => {
		for (let todo of todoItems) {
			if (description === todo.description) return todo;
		}
	};

	const deleteTodo = (description: string): void => {
		let items = [ ...todoItems ];
		let result = items.filter((todo) => todo.description !== description);

		setTodoItems(result);
	};

	const toggleTodo = (description: string): void => {
		let item = findItem(description);

		if (!item) return;

		item.completed = !item.completed;

		let currentItems = [ ...todoItems ];

		if (item) setTodoItems(currentItems);
	};

	return (
		<div className="max-w-xl mt-4">
			<AddTodo saveTodo={saveTodo} />
			<div>
				{todoItems.map((item: TodoItem, idx: number) => (
					<Todo key={idx} todo={item} functions={{ toggleTodo, deleteTodo }} />
				))}
			</div>
		</div>
	);
};

export default TodoList;
