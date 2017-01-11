
import { assert } from "chai";
import { Price } from "../../src/Price";
import { CurrencyCanadian } from "../../src/CurrencyCanadian";

describe("Price value object", () => {
	it("should format a zero dollar amount", () => {
		const price = new Price(0, new CurrencyCanadian());
		assert.equal(price.formatted(), "$0.00 CAD");
	});

	it("should format any dollar amount", () => {
		const price = new Price(5.3, new CurrencyCanadian());
		assert.equal(price.formatted(), "$5.30 CAD");
	});

	it("should format large dollar amounts", () => {
		const price = new Price(4828.98, new CurrencyCanadian());
		assert.equal(price.formatted(), "$4,828.98 CAD");
	});

	it("should allow access to the value and currency", () => {
		const price = new Price(5.3, new CurrencyCanadian());
		assert.equal(price.value, 5.3);
	});
});