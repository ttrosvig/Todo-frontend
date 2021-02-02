import axios from 'axios';
import { useState } from 'react';
import { REACT_APP_BASE_URL } from '../../variables';
import { useParams } from 'react-router-dom';

interface IParamTypes {
	folderId: string | undefined;
}

const AddTodo = () => {
	const [ formData, setFormData ] = useState('');

	let { folderId } = useParams<IParamTypes>();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (formData === '') return;

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
