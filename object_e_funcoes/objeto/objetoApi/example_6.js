const javascript = {}

Object.defineProperties(javascript, "name", {
  configurable: true,
  enumerable: true,
  value: "JavaScript",
  writable: true,
})
javascript.name = "ECMAScript"
console.log(javascript);
console.log(Object.keys(javascript))
console.log(Object.values(javascript))
console.log(Object.entries(javascript))
delete javascript.name;
console.log(javascript);
