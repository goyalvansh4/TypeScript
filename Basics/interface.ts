interface User{
  readonly dbId:string,
  username:string,
  email:string,
  password:string,
  googleId:number,
  age:number,
  github?:string
  getInfo:()=>string
}

interface User{
  githubToken:number
}

interface Admin extends User{
  role: 'admin' | 'ta' | 'tl'
}



export {}