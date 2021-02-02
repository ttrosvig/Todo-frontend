import AddTodo from './AddTodo';
import Todo from './Todo';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../variables';
import { useParams } from 'react-router-dom';

// Structure of todo
interface ITodoItem {
	description: string;
	completed: boolean;
	folder_id: number;
	id: number;
}

// Type for url var
interface IParamTypes {
	folderId: string | undefined;
}

const TodoList = () => {
	// Piece of state to store todos
	const [ todoItems, setTodoItems ] = useState<ITodoItem[]>([]);

	// Get the folderId from the URL
	let { folderId } = useParams<IParamTypes>();

	// Deletes a todo by id
	const deleteTodo = async (id: number) => {
		await axios.delete(`${REACT_APP_BASE_URL}/todos/${id}`);
	};

	// Toggles the todo completion status
	const toggleTodo = async (todo: ITodoItem) => {
		await axios.put(`${REACT_APP_BASE_URL}/todos/${todo.id}`, {
			description: todo.description,
			completed: !todo.completed,
			folder_id: Number(todo.folder_id)
		});
	};

	useEffect(
		() => {
			const getData = async () => {
				// Return if there is no folderId
				if (!folderId) return;

				// Get todos that have the current folderId
				const res = await axios.get(`${REACT_APP_BASE_URL}/todos/folders/${folderId}`);

				setTodoItems(res.data.todos);
			};
			getData();
		},
		[ todoItems, folderId ]
	);

	return (
		<div className="mt-4 w-1/2">
			<AddTodo />
			<div>
				{todoItems.map((item: ITodoItem, idx: number) => (
					<Todo key={idx} todo={item} functions={{ toggleTodo, deleteTodo }} />
				))}
			</div>
		</div>
	);
};

export default TodoList;
