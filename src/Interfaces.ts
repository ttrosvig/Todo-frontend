export interface ITodoItem {
	description: string;
	completed: boolean;
	folder_id: number;
	id: number;
}

export interface IParamTypes {
	folderId: string | undefined;
}

export interface IFolder {
	id: number;
	name: string;
}
