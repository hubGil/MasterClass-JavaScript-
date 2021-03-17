const obj = Object.create(null);
console.log("toString" in obj);
console.log("valueOf" in obj);

const map = new Map();
console.log(map.get("String"));
console.log(map.get("valueOf"));