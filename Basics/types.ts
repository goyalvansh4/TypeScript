type User={
  name:string;
  age:number;
  isActive:boolean;
}

function createUser(user:User):User{
  return {name:"",age:2,isActive:true}
}

createUser({name:"",age:4,isActive:true})