import { useState } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../variables';

interface IAddFolderProps {
	addFunc: () => void;
}

const AddFolder = ({ addFunc }: IAddFolderProps) => {
	const [ formData, setFormData ] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setFormData(event.target.value);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (formData === '') return;

		await axios.post(`${REACT_APP_BASE_URL}/folders`, { name: formData });

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
