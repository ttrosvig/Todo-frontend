import { useEffect, useState } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../variables';
import Folder from './Folder';
import AddFolder from './AddFolder';
import { IFolder } from '../../Interfaces';

const FolderList = () => {
	// State variables used for rendering and toggling
	const [ folders, setFolders ] = useState<any>([]);
	const [ isAdding, setIsAdding ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false);

	// Toggles the isAdding state variable
	const toggleAdding = () => {
		setIsAdding((isAdding) => !isAdding);
	};

	// Saves a folder in state
	const saveFolder = (newFolder: any) => {
		setFolders([ ...folders, newFolder ]);
	};

	// Removes a folder by passing in the folder ID
	const removeFolder = async (folder_id: number) => {
		await axios.delete(`${REACT_APP_BASE_URL}/folders/${folder_id}`);

		let filtered = folders.filter((folder: IFolder) => folder.id !== folder_id);

		setFolders(filtered);
	};

	// Retrieves folders whenever the folders variable is rendered and changes
	useEffect(() => {
		const getData = async () => {
			setIsLoading(true);

			// Retrieve all folders from the DB
			const res = await axios.get(`${REACT_APP_BASE_URL}/folders`);

			// Save folders in state
			setFolders(res.data.folders);
		};
		getData();

		setIsLoading(false);
	}, []);

	return (
		<div>
			{isAdding ? (
				<AddFolder addFunc={toggleAdding} submitFunc={saveFolder} />
			) : (
				<div className="flex flex-row justify-end items-center">
					<p className="text-blue-900 mx-1 font-bold">Add Folder</p>

					<button
						className="py-2 px-3 bg-gradient-to-r to-blue-900 from-pink-900 rounded-full text-white add-folder"
						onClick={toggleAdding}
					>
						<i className="fas fa-plus" />
					</button>
				</div>
			)}

			{isLoading ? (
				<div className="text-pink-900 flex flex-row justify-center">
					<i className="fas fa-spinner animate-spin text-5xl" />
				</div>
			) : null}

			{folders.map((folder: IFolder, idx: number) => {
				return <Folder id={folder.id} key={idx} name={folder.name} removeFunc={() => removeFolder(folder.id)} />;
			})}
		</div>
	);
};

export default FolderList;
