console.log(3*null + true);  ////////1
console.log(new String === "");       //////false
console.log([1,2,3].toString());      ////"1,2,3"
var a = "test"        
console.log(a.split(""));       /////// ["t","e","s","t"]
console.log(typeof a);       //////"string"
console.log(a.constructor.name);         /////"String"
console.log(Array.prototype.splice.call(a.split(""),2));    ////["s","t"]
console.log(Object.prototype.toString.call("test"));  /////// "[object String]"
console.log(Array.prototype.slice.call("test"));     ////["t","e","s","t"]
console.log(["angular"].toString().slice(3,6).concat("n")); ///"ulan"
function test(param){
    console.log(this.name + "-" + param);
}
var a = {"name":angular};
console.log(test.call(a,2));  ////"angular-2"
console.log(test.call(a,1,2));    /////"angular-1"
console.log(test.call(a,[1,2])); ////// "angular-1,2"
console.log(test.apply(a,[2,1]));  /////"angular-2"
console.log(test.apply(a));         //////"angular-undefined"
console.log(test.apply({},[2])); ///"undefined-2"
console.log(test.bind(a)(4,3,2));     ///// "angular-4"
console.log(test.bind({})(1));          //// "undefined-1"
console.log(test.bind(a,1)());       ////// "angular-1"
console.log(test.bind([1].map(test.bind(a,7))));      ///////"angular-7"



