/* In this repo your job is to write functions to make each function call work properly.
 Below is a sample problem
 
 //code here for sayHi
 
 sayHi('Hi Katie', function(thingToSay){
 alert(thingToSay);
 });
 
 
 and what you should write is the sayHi function that makes the code above work,
 
 
 var sayHi = function(str, cb){
 cb(str);
 }
 
 sayHi('Hi Katie', function(thingToSay){
 alert(thingToSay); //should alert ('Hi Katie')'
 });
 
 
 */



function first(arr, callback) {
	return callback(arr[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function (firstName) {
	console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function last(arr, callback) {
	return callback(arr[arr.length - 1])
}

last(names, function (lastName) {
	console.log('The last name in names is ' + lastName);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function multiply(x, y, callback) {
	return callback(x * y);
}

multiply(4, 3, function (answer) {
	console.log('The answer is ' + answer); //should console.log 12
})



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function contains(names, name, callback) {
	if (names.indexOf(name) > -1) {
		return callback(true);
	} else {
		return callback(false);
	}
}

contains(names, 'Colt', function (result) {
	if (result === true) {
		console.log('Colt is in the array');
	} else {
		console.log('Colt is not in the array');
	}
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function uniq(arr, callback) {
	var rtnArr = [];
	for (var a = 0; a < arr.length; a++) {
		if (rtnArr.indexOf(arr[a]) < 0 ) {
			rtnArr.push(arr[a])
		}
	}
	return callback(rtnArr)
}

uniq(names, function (uniqArr) {
	console.log('The new names array with all the duplicate items removed is ', uniqArr);
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




function each(arr,callback) {
	for (var a = 0; a<arr.length; a++) {
		callback(arr[a],a);
	}
}

each(names, function (item, indice) {
	console.log('The item in the ' + indice + ' position is ' + item)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





function getUserById(users,id,callback) {
	for (var a = 0; a<users.length; a++) {
		if (users[a].id === id){
			return callback(users[a]);
		}
	}
}

var users = [
	{
		id: '12d',
		email: 'tyler@gmail.com',
		name: 'Tyler',
		address: '167 East 500 North'
	},
	{
		id: '15a',
		email: 'cahlan@gmail.com',
		name: 'Cahlan',
		address: '135 East 320 North'
	},
	{
		id: '16t',
		email: 'ryan@gmail.com',
		name: 'Ryan',
		address: '192 East 32 North'
	}
];

getUserById(users, '16t', function (user) {
	console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
