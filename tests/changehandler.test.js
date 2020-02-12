let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  // Set up a test below...
  test("The ChangeHandler class is defined.", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(1);
    expect(ChangeHandler).toBeDefined();
  });
  test("amountDue is set based on an arguement.", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(1);
    expect(test.amountDue).toBe(1);
  });
  test("cashTendered is set to zero.", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(999);
    expect(test.cashTendered).toBe(0);
  });
  test("inserting a quarter adds 25.", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(999);
    test.insertCoin("quarter");
    expect(test.cashTendered).toBe(25);
  });
  test("inserting a dime adds 10.", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(999);
    test.insertCoin("dime");
    expect(test.cashTendered).toBe(10);
  });
  test("inserting a quarter adds 25.", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(999);
    test.insertCoin("nickel");
    expect(test.cashTendered).toBe(5);
  });
  test("inserting a quarter adds 25.", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(999);
    test.insertCoin("penny");
    expect(test.cashTendered).toBe(1);
  });
  test("cash tendered is more than cash due", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(25);
    test.insertCoin("quarter");
    test.insertCoin("penny");
    expect(test.isPaymentSufficient()).toBe(true);
  });
  test("cash tendered is less than cash due", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(25);
    test.insertCoin("penny");
    expect(test.isPaymentSufficient()).toBe(false);
  });
  test("cash tendered is equal to cash due", function() {
    // Remember, you can arrange, act, and assert...start small
    let test = new ChangeHandler(25);
    test.insertCoin("quarter");
    expect(test.isPaymentSufficient()).toBe(true);
  });
  test("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2", function() {
    let test = new ChangeHandler(0);
    test.insertCoin("quarter");
    test.insertCoin("nickel");
    test.insertCoin("penny");
    test.insertCoin("penny");
    expect(test.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
    });
  });

  test("10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0", function() {
    let test = new ChangeHandler(0);
    test.insertCoin("dime");
    
    expect(test.giveChange()).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0
    });
  });
  test("27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2", function() {
    let test = new ChangeHandler(0);
    test.insertCoin("quarter");
    test.insertCoin("penny");
    test.insertCoin("penny");
    expect(test.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2
    });
  });
  test("68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3", function() {
    let test = new ChangeHandler(0);
    test.insertCoin("quarter");
    test.insertCoin("quarter");
    test.insertCoin("dime");
    test.insertCoin("nickel");
    test.insertCoin("penny");
    test.insertCoin("penny");
    test.insertCoin("penny");
    expect(test.giveChange()).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3
    });
  });
});
