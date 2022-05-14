export interface IRowProps {
	item: {
		name: string;
		url: string;
	};
	handlePress?: () => void;
}
