import { useEffect, useState } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../variables';
import Folder from './Folder';
import AddFolder from './AddFolder';

// Describes the structure of a folder
interface IFolder {
	id: number;
	name: string;
}

const FolderList = () => {
	// State variables used for rendering and toggling
	const [ folders, setFolders ] = useState<any>([]);
	const [ isAdding, setIsAdding ] = useState(false);

	// Toggles the isAdding state variable
	const toggleAdding = () => {
		setIsAdding((isAdding) => !isAdding);
	};

	// Removes a folder by passing in the folder ID
	const removeFolder = async (folder_id: number) => {
		await axios.delete(`${REACT_APP_BASE_URL}/folders/${folder_id}`);
	};

	// Retrieves folders whenever the folders variable is rendered and changes
	useEffect(
		() => {
			const getData = async () => {
				// Retrieve all folders from the DB
				const res = await axios.get(`${REACT_APP_BASE_URL}/folders`);

				// Save folders in state
				setFolders(res.data.folders);
			};
			getData();
		},
		[ folders ]
	);

	return (
		<div>
			{isAdding ? (
				<AddFolder addFunc={toggleAdding} />
			) : (
				<div className="flex flex-row justify-end items-center">
					<p className="text-white mx-1 font-bold">Add Folder</p>

					<button className="py-2 px-3 bg-blue-900 rounded-full text-white" onClick={toggleAdding}>
						<i className="fas fa-plus" />
					</button>
				</div>
			)}

			{folders.map((folder: IFolder, idx: number) => {
				return <Folder id={folder.id} key={idx} name={folder.name} removeFunc={() => removeFolder(folder.id)} />;
			})}
		</div>
	);
};

export default FolderList;
