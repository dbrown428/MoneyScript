import { Currency } from "./Currency"

export class CurrencyCanadian implements Currency {
	code(): string {
		return "CAD";
	}

	symbol(): string {
		return "$";
	}

	format(value: number): string {
		return value.toLocaleString('en-CA', {minimumFractionDigits: 2});
	}
}
