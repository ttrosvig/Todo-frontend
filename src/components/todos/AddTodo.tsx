import axios from 'axios';
import { useState } from 'react';
import { REACT_APP_BASE_URL } from '../../variables';
import { useParams } from 'react-router-dom';

// Type for URL var
interface IParamTypes {
	folderId: string | undefined;
}

const AddTodo = () => {
	// Piece of state to hold todo description
	const [ formData, setFormData ] = useState('');

	// Get the folderId from the URL
	let { folderId } = useParams<IParamTypes>();

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
		await axios.post(`${REACT_APP_BASE_URL}/todos`, {
			description: formData,
			completed: false,
			folder_id: Number(folderId)
		});

		setFormData('');
	};

	return (
		<form className="flex flex-row justify-center" onSubmit={handleSubmit}>
			<input
				type="text"
				className="border-2 border-blue-900 rounded mr-1 w-screen shadow-md focus:ring-2 ring-blue-400 outline-none"
				value={formData}
				onChange={handleChange}
				autoFocus
			/>
			<button className="text-white bg-gradient-to-r to-blue-900 from-pink-900 py-1 px-3 rounded shadow-md ">
				Add
			</button>
		</form>
	);
};

export default AddTodo;
