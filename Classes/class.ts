interface TakePhoto{
  camera:string,
  filter:string,
  burst:string
}

interface Story{
  createStory():void
}

class Instragram implements TakePhoto{
  constructor(
    public camera:string,
    public filter:string,
    public burst:string
  ){

  }
}

class Yotube implements TakePhoto,Story{
  constructor(
    public camera:string,
    public filter:string,
    public burst:string
  ){

  }
  createStory(): void {
    console.log("Story");
    
  }
}




abstract class TakePhotos{
  constructor(
    public cameramode:string,
    public filter:string
  ){}
  abstract getSepia():void

  setReelTime():number{
    return 8;
  }
}

class Instragrams extends TakePhotos{
  constructor(
    public cameraMode:string,
    public filter:string,
    public burst:string
  ){
     super(cameraMode,filter)
  }
  getSepia(): void {
    console.log("Sepia");
    
  }
}