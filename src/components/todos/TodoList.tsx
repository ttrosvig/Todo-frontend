import AddTodo from './AddTodo';
import Todo from './Todo';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../variables';
import { useParams } from 'react-router-dom';
import { ITodoItem, IParamTypes } from '../../Interfaces';

const TodoList = () => {
	// Piece of state to store todos
	const [ todoItems, setTodoItems ] = useState<ITodoItem[] | any>([]);

	// Get the folderId from the URL
	let { folderId } = useParams<IParamTypes>();

	// Save new todo in state
	const saveTodo = (newTodo: any) => {
		setTodoItems([ ...todoItems, newTodo ]);
	};

	// Deletes a todo by id
	const deleteTodo = async (id: number) => {
		await axios.delete(`${REACT_APP_BASE_URL}/todos/${id}`);

		let filtered = todoItems.filter((todo: any) => todo.id !== id);

		setTodoItems(filtered);
	};

	// Toggles the todo completion status
	const toggleTodo = async (todo: ITodoItem) => {
		let editedTodo = await axios.put(`${REACT_APP_BASE_URL}/todos/${todo.id}`, {
			description: todo.description,
			completed: !todo.completed,
			folder_id: Number(todo.folder_id)
		});

		let filtered = todoItems.filter((todoItem: ITodoItem) => todoItem.id !== todo.id);

		setTodoItems([ ...filtered, editedTodo.data.todo ]);
	};

	useEffect(
		() => {
			const getData = async () => {
				// Return if there is no folderId
				if (!folderId) return;

				// Get todos that have the current folderId
				const res = await axios.get(`${REACT_APP_BASE_URL}/todos/folders/${folderId}`);

				// Save todos in state
				setTodoItems(res.data.todos);
			};
			getData();
		},
		[ folderId ]
	);

	return (
		<div className="mt-4 w-1/2">
			<AddTodo saveTodo={saveTodo} />
			<div>
				{todoItems.map((item: ITodoItem, idx: number) => (
					<Todo key={idx} todo={item} functions={{ toggleTodo, deleteTodo }} />
				))}
			</div>
		</div>
	);
};

export default TodoList;
