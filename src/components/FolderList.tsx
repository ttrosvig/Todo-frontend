import { useEffect, useState } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../variables';
import Folder from './Folder';
import AddFolder from './AddFolder';

interface IFolder {
	name: string;
}

const FolderList = () => {
	const [ folders, setFolders ] = useState<any>([]);
	const [ isAdding, setIsAdding ] = useState(false);

	const toggleAdding = () => {
		setIsAdding((isAdding) => !isAdding);
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
				<div className="flex flex-row justify-end">
					<button className="py-2 px-3 bg-blue-900 rounded-full text-white" onClick={toggleAdding}>
						<i className="fas fa-plus" />
					</button>
				</div>
			)}

			{folders.map((folder: IFolder, idx: number) => {
				return <Folder key={idx} name={folder.name} />;
			})}
		</div>
	);
};

export default FolderList;
