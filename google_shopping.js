var data = require("./products.json")


// console.log(data["items"]);
console.log(data["items"].length)

for (var i = 0; i < data["items"].length; i++) {
	var object = data["items"][i]["product"]["inventories"];
	console.log(object)
};


// console.log(data["items"][0]);
// console.log(data["items"][1]);
// console.log(data["items"][2]);