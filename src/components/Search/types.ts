export interface IProps {
	value: string | null;
	handleChange: (term: string | null) => void;
	handleSearch: (e: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLInputElement>) => void;
	handleClear: () => void;
	disabled: boolean;
	loading: boolean;
}
