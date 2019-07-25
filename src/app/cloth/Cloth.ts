

export class Cloth {
  id: string;
  image: String;
  isImagebase64:boolean;
  color: string[];
  clothStyle?: string[];
  typeOfItem: string[];
  seasons?: string[];


  constructor(id: string, image: String,
    color: string[], typeOfItem: string[],
    isImagebase64:boolean=false,
     clothStyle?: string[],
    seasons?: string[] ) {
    this.id = id;
    this.image = image;
    this.color = color;
    this.clothStyle = clothStyle;
    this.typeOfItem = typeOfItem;
    this.seasons = seasons;
    this.isImagebase64=isImagebase64;
  }
}
