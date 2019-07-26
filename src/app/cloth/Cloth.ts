

export class Cloth {
  userId:string;
  id: string;
  image: String;
  color: string[];
  kindCloth?: string[];
  typeOfItem: string[];
  seasons?: string[];


  constructor(userId:string,id: string, image: String,
    color: string[], typeOfItem: string[], kindCloth?: string[],
    seasons?: string[]) {
    this.userId=userId;
    this.id = id;
    this.image = image;
    this.color = color;
    this.kindCloth = kindCloth;
    this.typeOfItem = typeOfItem;
    this.seasons = seasons;
  }
}
