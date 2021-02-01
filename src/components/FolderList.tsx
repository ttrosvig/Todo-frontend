import { useEffect, useState } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../variables';
import Folder from './Folder';
import AddFolder from './AddFolder';

interface IFolder {
	id: number;
	name: string;
}

const FolderList = () => {
	const [ folders, setFolders ] = useState<any>([]);
	const [ isAdding, setIsAdding ] = useState(false);

	const toggleAdding = () => {
		setIsAdding((isAdding) => !isAdding);
	};

	const removeFolder = async (id: number) => {
		await axios.delete(`${REACT_APP_BASE_URL}/folders/${id}`);
	};

	useEffect(
		() => {
			const getData = async () => {
				const res = await axios.get(`${REACT_APP_BASE_URL}/folders`);

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
				return <Folder key={idx} name={folder.name} removeFunc={() => removeFolder(folder.id)} />;
			})}
		</div>
	);
};

export default FolderList;
