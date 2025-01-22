function addTwo(num:number):number{
  return num + 2;
}

function getUpper(val:string){
  return val.toUpperCase()
}

function SignUp(name:string,email:string,isPaid:boolean){
  console.log(name,email,isPaid)
}

let getHello = (val:string):string =>{
  return 'Hello' + val;
}

addTwo(5);
getUpper("jai shree ram")
SignUp("abc","a@2.com",true)
getHello("Vansh")
