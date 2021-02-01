interface IFolderProps {
	name: string;
}

const Folder = ({ name }: IFolderProps) => {
	return (
		<div className="bg-blue-900 text-white font-bold p-3 rounded flex flex-row justify-between items-center my-2 w-screen">
			<p>{name}</p>

			<div className="bg-blue-400 py-2 px-3 rounded-full ml-6">
				<i className="fas fa-folder" />
			</div>
		</div>
	);
};

export default Folder;
