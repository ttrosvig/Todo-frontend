import { useState } from 'react';

interface AddTodoProps {
	saveTodo: (todo: string) => void;
}

const AddTodo = ({ saveTodo }: AddTodoProps) => {
	const [ formData, setFormData ] = useState('');

	const saveTodoFunc = (todo: string) => {
		saveTodo(todo);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormData(event.target.value);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		saveTodoFunc(formData);
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
			<button className="text-white bg-blue-900 py-1 px-3 rounded shadow-md hover:bg-blue-900 transition delay-100">
				Add
			</button>
		</form>
	);
};

export default AddTodo;
