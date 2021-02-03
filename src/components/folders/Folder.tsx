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
		<div className="bg-blue-900 text-white font-bold p-3 rounded flex flex-row justify-between items-center my-2 w-full hover:bg-pink-900 transiton delay-100">
			<Link to={`/folder/${id}`}>
				<p className="folder">{name}</p>
			</Link>

			<button
				onMouseEnter={() => setIsHovering((isHovering) => !isHovering)}
				onMouseLeave={() => setIsHovering((isHovering) => !isHovering)}
				onClick={removeFunc}
				className="bg-blue-200 py-2 px-4 rounded-full ml-6 text-blue-900 hover:text-pink-900 delete"
			>
				{isHovering ? <i className="fas fa-times" /> : <i className="fas fa-folder" />}
			</button>
		</div>
	);
};

Folder.defaultProps = {
	name: 'Test',
	id: 1,
	removeFunc: () => null
};

export default Folder;
