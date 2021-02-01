import { useState } from 'react';
import { Link } from 'react-router-dom';

// Folder props structure
interface IFolderProps {
	name: string;
	id: number;
	removeFunc: () => void;
}

const Folder = ({ name, id, removeFunc }: IFolderProps) => {
	// Piece of state to toggle when mouse enters and leaves
	const [ isHovering, setIsHovering ] = useState(false);

	return (
		<div className="bg-blue-900 text-white font-bold p-3 rounded flex flex-row justify-between items-center my-2 w-full">
			<Link to={`/folder/${id}`}>
				<p>{name}</p>
			</Link>

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
