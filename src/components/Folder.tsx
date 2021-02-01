import { useState } from 'react';

interface IFolderProps {
	name: string;
	removeFunc: () => void;
}

const Folder = ({ name, removeFunc }: IFolderProps) => {
	const [ isHovering, setIsHovering ] = useState(false);

	return (
		<div className="bg-blue-900 text-white font-bold p-3 rounded flex flex-row justify-between items-center my-2 w-full">
			<p>{name}</p>

			<button
				onMouseEnter={() => setIsHovering((isHovering) => !isHovering)}
				onMouseLeave={() => setIsHovering((isHovering) => !isHovering)}
				onClick={removeFunc}
				className="bg-blue-400 py-2 px-4 rounded-full ml-6"
			>
				{isHovering ? <i className="fas fa-times" /> : <i className="fas fa-folder" />}
			</button>
		</div>
	);
};

export default Folder;
