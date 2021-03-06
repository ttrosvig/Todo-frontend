import axios from 'axios';
import { useState } from 'react';
import { REACT_APP_BASE_URL } from '../../variables';
import { useParams, useHistory } from 'react-router-dom';
import { IParamTypes } from '../../Interfaces';

// AddTodo props structure
interface IAddTodoProps {
	saveTodo: (newTodo: any) => void;
}

const AddTodo = ({ saveTodo }: IAddTodoProps) => {
	// Piece of state to hold todo description
	const [ formData, setFormData ] = useState('');

	const history = useHistory();

	// Get the folderId from the URL
	let { folderId } = useParams<IParamTypes>();

	// Redirect to home page
	const homeFunc = () => {
		history.push('/');
	};

	// onChange func
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(event.target.value);
	};

	// onSubmit func
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		// Return if the input is empty
		if (formData === '') return;

		// Post the new todo
		let newTodo = await axios.post(`${REACT_APP_BASE_URL}/todos`, {
			description: formData,
			completed: false,
			folder_id: Number(folderId)
		});

		saveTodo(newTodo.data.todo);
		setFormData('');
	};

	return (
		<form className="flex flex-row justify-center" onSubmit={handleSubmit}>
			<input
				type="text"
				className="border-2 border-blue-900 rounded mr-1 w-screen shadow-md focus:ring-2 ring-blue-400 outline-none add-todo-input"
				value={formData}
				onChange={handleChange}
				autoFocus
			/>
			<button className="text-white bg-gradient-to-r to-blue-900 from-pink-900 py-1 px-3 rounded shadow-md add-todo">
				Add
			</button>

			<button
				className="text-white bg-gradient-to-r ml-1 to-blue-900 from-pink-900 py-1 px-3 rounded shadow-md home"
				onClick={homeFunc}
			>
				<i className="fas fa-home" />
			</button>
		</form>
	);
};

export default AddTodo;
