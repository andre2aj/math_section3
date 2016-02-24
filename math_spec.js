// tell jasmine where to find our code
var math = require('../math');

describe("A program that does basic artithmetic", function() {
	it("can add two numbers together", function() {
		expect(math.add(3,5)).toBe(8);
	});
});
