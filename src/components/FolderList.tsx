import { useEffect, useState } from 'react';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../variables';
import Folder from './Folder';

interface IFolder {
	name: string;
}

const FolderList = () => {
	const [ folders, setFolders ] = useState<any>([]);

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
			{folders.map((folder: IFolder, idx: number) => {
				return <Folder key={idx} name={folder.name} />;
			})}
		</div>
	);
};

export default FolderList;
