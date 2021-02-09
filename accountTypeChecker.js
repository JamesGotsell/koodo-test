const accountTypeChecker = (accountBalanceHistory) => {
    if(!Array.isArray(accountBalanceHistory)) return "Invalid Data"
    if(accountBalanceHistory.length === 0) return "Invalid Data"
    /***
     Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
     whether this array is of type A (variable) or type B (fixed).

     Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.

     Type 🅱 is one where the balance amount changes by the same amount each month.
     ***/
    let result;
    let differenceArray = [] 
    const difference = (x,y) => {
        return Math.abs(x - y)

    }

    const amounts = accountBalanceHistory.map((item) => { return item.account.balance.amount})
 

    for (let i = 0; i < amounts.length-1; i ++ ) {
        let current = amounts[i]
        let next
        if (i < (amounts.length - 1)) {
            next = amounts[i+1]
        }
        if (i === amounts.length) {
            next = amounts[i]
            return 
        }
        differenceArray.push(difference(current, next))
    }

    const Equal = (array) => array.every((item) => item === array[0]) 
    result = !Equal(differenceArray)

    return result ? "A" : "B";
};

module.exports =  accountTypeChecker;