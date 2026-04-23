/*
 Tests:

    Waiting: 1. You should have a booWho function.
    Waiting: 2. booWho(true) should return true.
    Waiting: 3. booWho(false) should return true.
    Waiting: 4. booWho([1, 2, 3]) should return false.
    Waiting: 5. booWho([].slice) should return false.
    Waiting: 6. booWho({ "a": 1 }) should return false.
    Waiting: 7. booWho(1) should return false.
    Waiting: 8. booWho(NaN) should return false.
    Waiting: 9. booWho("a") should return false.
    Waiting: 10. booWho("true") should return false.
    Waiting: 11. booWho("false") should return false. 
    */
    function booWho(bool) {
  return typeof bool === "boolean";
}
// why this works
// typeof true = boolean
// typeof falsue = boolean
//typeof anything else = not boolean