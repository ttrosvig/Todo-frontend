import { useState } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../variables';

// AddFolder props structure
interface IAddFolderProps {
	addFunc: () => void;
}

const AddFolder = ({ addFunc }: IAddFolderProps) => {
	// Piece of state to hold the form data
	const [ formData, setFormData ] = useState('');

	// Saves current target value to form state when the input value is changed
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData(event.target.value);
	};

	// Performs certain actions when the form is submitted
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		// Prevents page refresh
		event.preventDefault();

		// Returns if the form is submitted with an empty string
		if (formData === '') return;

		// Posts the new folder to the DB
		await axios.post(`${REACT_APP_BASE_URL}/folders`, { name: formData });

		// Reset the form input
		setFormData('');
	};

	return (
		<form className="flex flex-row justify-center" onSubmit={handleSubmit}>
			<input type="text" className="p-2 w-4/6" onChange={handleChange} value={formData} />

			<button className="p-2 bg-blue-900 text-white rounded w-1/6">
				<i className="fas fa-check" />
			</button>
			<button onClick={addFunc} className="py-2 px-3 bg-blue-900 rounded text-white w-1/6">
				<i className="fas fa-times" />
			</button>
		</form>
	);
};

export default AddFolder;
