function fetchData(callback) {
    setTimeout(function() {
        callback("Data fetched");
    }, 2000);
}

function handleData(data) {
    console.log(data);
}

fetchData(handleData);

function fetchUsers(callback) {
    setTimeout(function() {
        callback([{ name: "Ah Beng", age: 25 }, { name: "Ali", age: 22 }]);
    }, 2000);
}

function printUsers(users) {
    users.forEach(function(user) {
        console.log(`Name: ${user.name}, Age: ${user.age}`);
    });
}

fetchUsers(printUsers);