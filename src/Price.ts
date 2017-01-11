import { Currency } from "./Currency";

export class Price {
	value: number;
	currency: Currency;

	constructor(value: number, currency: Currency) {
		this.value = value;
		this.currency = currency;
	}

	formatted(): string {
		const localeValue = this.currency.format(this.value);
		const formattedValue = this.currency.symbol() + localeValue + " " + this.currency.code();
		
		return formattedValue;
	}
}
