let user = {}

user.name = "John";
user.surname = "Smith";

user.name = "Pete";

delete user.name;

function isEmpty(obj){
	if(let key in obj){
		return false;
	}

	else return true;
}

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}

let cnt = 0;

for(let key in salaries){
	cnt = cnt + salaries[key];
}

function multiplyNumeric(obj){

	for(let key in obj){
		if(typeof obj[key] == "number"){
			obj[key] = obj[key] * 2;
		}
	}

	return obj;
}

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
};

newMenu = multiplyNumeric(menu);