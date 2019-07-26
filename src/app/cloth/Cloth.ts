

export class Cloth {
  userId:string;
  id: string;
  image: String;
  isImagebase64:boolean;
  color: string[];
  clothStyle?: string[];
  typeOfItem: string[];
  seasons?: string[];


  constructor(userId:string,id: string, image: String,
    color: string[], typeOfItem: string[],
    isImagebase64:boolean=false,
     clothStyle?: string[],
    seasons?: string[] ) {
      this.userId=userId;
      this.id = id;
    this.image = image;
    this.color = color;
    this.clothStyle = clothStyle;
    this.typeOfItem = typeOfItem;
    this.seasons = seasons;
    this.isImagebase64=isImagebase64;
  }
}
