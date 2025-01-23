let score : number | string = 33;

score = 44;
score = '55';

console.log(score);

type User = {
  // readonly dbId:number,
  name:string,
  id:number
}

type Admin ={
  username:string,
  id:number
}

let user : User | Admin = {name:'abc',id:121}

user = {username:"admin1",id:121}

export {}
