import AddTodo from './AddTodo';
import Todo from './Todo';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../variables';
import { useParams } from 'react-router-dom';

interface ITodoItem {
	description: string;
	completed: boolean;
	folder_id: number;
	id: number;
}

interface IParamTypes {
	folderId: string | undefined;
}

const TodoList = () => {
	const [ todoItems, setTodoItems ] = useState<ITodoItem[]>([]);

	let { folderId } = useParams<IParamTypes>();

	const deleteTodo = async (id: number) => {
		await axios.delete(`${REACT_APP_BASE_URL}/todos/${id}`);
	};

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
				if (!folderId) return;

				const res = await axios.get(`${REACT_APP_BASE_URL}/todos/folders/${folderId}`);

				setTodoItems(res.data.todos);
			};
			getData();
		},
		[ todoItems, folderId ]
	);

	return (
		<div className="mt-4 w-full">
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
