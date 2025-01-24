console.log("Welcome to production with TS");
console.log("typescript is amazing")


class User{
  email:string
  name:string
  city:string = ""
  constructor(email:string,name:string){
    this.email = email;
    this.name= name;
  }
}

let user1 = new User("h@h.com","hitesh");
// user1.city = 2  x not valid


class Animal{
  constructor(public category:string,public name:string,private readonly liveIn:string = "Forest"){
  }
}