function fn () {} vs var fn = function () {};

var ob = {}; or Object ob = {};
ob.prop1 = fn1
ob.prop2 = fn2

vs

var ob = {
prop1: fn
prop2: fn
};
 reusability?
like ob is blank until we call the methods to add.
