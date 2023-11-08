import { afterEach } from "mocha";

describe.skip('Description of test suite', () => {
    before(() => {
        console.log("runs once before the first test in this block");
    });
    
    after(() => {
        console.log("runs once after the last test in this block");
    });

    beforeEach(() => {
        console.log("runs once before each test in this block");
    });
    
    afterEach(() => {
        console.log("runs once after each test in this block");
    });

    it('Individual test 1', () => {
        console.log("Execute code: Individual Test 1");
    });

    it('Individual test 2', () => {
        console.log("Execute code: Individual Test 2");
    });
});