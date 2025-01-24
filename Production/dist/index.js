"use strict";
console.log("Welcome to production with TS");
console.log("typescript is amazing");
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
let user1 = new User("h@h.com", "hitesh");
// user1.city = 2  x not valid
class Animal {
    constructor(category, name, liveIn = "Forest") {
        this.category = category;
        this.name = name;
        this.liveIn = liveIn;
    }
}
