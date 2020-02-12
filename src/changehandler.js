/**
 * This class handles change for a vending machine.
 *
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * The parameter "type" is a string that is either quarter, dime, nickel, or penny
   */
  insertCoin(typeOfCoin) {
    if (typeOfCoin === "quarter") {
      this.cashTendered += 25;
    } else if (typeOfCoin === "dime") {
      this.cashTendered += 10;
    } else if (typeOfCoin === "nickel") {
      this.cashTendered += 5;
    } else if (typeOfCoin === "penny") {
      this.cashTendered += 1;
    }
  }

  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
    if (this.cashTendered > this.amountDue) {
      return true;
    } else if (this.cashTendered < this.amountDue) {
      return false;
    } else if (this.cashTendered === this.amountDue) {
      return true;
    }
  }

  giveChange() {
    // TODO return the correct change in the following format...

    let changeDue = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    while (this.cashTendered > this.amountDue) {
      if (this.cashTendered - this.amountDue >= 25) {
        this.cashTendered -= 25;
        changeDue.quarters++;
      } else if (this.cashTendered - this.amountDue >= 10) {
        this.cashTendered -= 10;
        changeDue.dimes++;
      } else if (this.cashTendered - this.amountDue >= 5) {
        this.cashTendered -= 5;
        changeDue.nickels++;
      } else {
        this.cashTendered -= 1;
        changeDue.pennies++;
      }
    }

    return changeDue;
  }
}

module.exports = { ChangeHandler };
