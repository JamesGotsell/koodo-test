const  accountTypeChecker = require("./accountTypeChecker")
// https://gist.github.com/Koodoo-Tech/b41e159dc70b7b473c60eb3ce55f39f6
describe('main', () => {

    it('expect to function to return invalid data if data type that is not an array', () => {
        expect(accountTypeChecker(('string'))).toEqual("Invalid Data")
        expect(accountTypeChecker(({}))).toEqual("Invalid Data")
        expect(accountTypeChecker((10))).toEqual("Invalid Data")
        expect(accountTypeChecker((true))).toEqual("Invalid Data")
    });
    it('expect to function to return invalid data if passed empty array', () => {
        const emptyArray = []
        expect(accountTypeChecker((emptyArray))).toEqual("Invalid Data")
    });

    it('expect to function to return B as the the value decreases by a fixed amount ', () => {
      //    pass empty
      const accountBalanceDescreaseFixed = [
        {
          monthNumber: 0, // current month
          account: {
            balance: { amount: 0 },
          },
        },
        {
          monthNumber: 1, // last month
          account: {
            balance: { amount: 100 },
          },
        },
        {
          monthNumber: 2, // two months ago
          account: {
            balance: { amount: 200 },
          },
        }
      ]
          expect(accountTypeChecker(( accountBalanceDescreaseFixed))).toEqual("B")
      });
    it('expect to function to return B as the the value increases by a fixed amount ', () => {
        const accountBalanceIncresedFixed = [
          {
            monthNumber: 0, // current month
            account: {
              balance: { amount: 300 },
            },
          },
          {
            monthNumber: 1, // last month
            account: {
              balance: { amount: 250 },
            },
          },
          {
            monthNumber: 2, // two months ago
            account: {
              balance: { amount: 200 },
            },
          }
        ]
        expect(accountTypeChecker((accountBalanceIncresedFixed))).toEqual("B")
      });
      it('expect to function to return A as the the value increases by a varible amount ', () => {
        const accountBalanceIncresedVarible = [
          {
            monthNumber: 0, // current month
            account: {
              balance: { amount: 300 },
            },
          },
          {
            monthNumber: 1, // last month
            account: {
              balance: { amount: 224 },
            },
          },
          {
            monthNumber: 2, // two months ago
            account: {
              balance: { amount: 200 },
            },
          }
        ]
        expect(accountTypeChecker((accountBalanceIncresedVarible))).toEqual("A")
      });
      it('expect to function to return A as the the value descreases by a variable amount ', () => {
        const accountBalanceDescreaseVarible = [
          {
            monthNumber: 0, // current month
            account: {
              balance: { amount: 121 },
            },
          },
          {
            monthNumber: 1, // last month
            account: {
              balance: { amount: 150 },
            },
          },
          {
            monthNumber: 2, // two months ago
            account: {
              balance: { amount: 200 },
            },
          }
        ]
        expect(accountTypeChecker((accountBalanceDescreaseVarible))).toEqual("A")
      });
})