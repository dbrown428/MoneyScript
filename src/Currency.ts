
export interface Currency {
	code(): string;
	symbol(): string;
	format(value: number): string;
}
