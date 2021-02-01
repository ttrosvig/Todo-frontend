import AddTodo from './AddTodo';
import Todo from './Todo';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../variables';
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

	const addTodo = async (todo: string) => {
		await axios.post(`${REACT_APP_BASE_URL}/todos`, todo);
	};

	const deleteTodo = async (id: number) => {
		await axios.delete(`${REACT_APP_BASE_URL}/todos/${id}`);
	};

	const toggleTodo = (description: string) => {};

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
		<div className="max-w-xl mt-4">
			<AddTodo saveTodo={addTodo} />
			<div>
				{todoItems.map((item: ITodoItem, idx: number) => (
					<Todo key={idx} todo={item} functions={{ toggleTodo, deleteTodo }} />
				))}
			</div>
		</div>
	);
};

export default TodoList;
