

export class Cloth {
  id: string;
  image: String;
  color: string[];
  clothStyle?: string[];
  typeOfItem: string[];
  seasons?: string[];


  constructor(id: string, image: String,
    color: string[], typeOfItem: string[], clothStyle?: string[],
    seasons?: string[], ) {
    this.id = id;
    this.image = image;
    this.color = color;
    this.clothStyle = clothStyle;
    this.typeOfItem = typeOfItem;
    this.seasons = seasons;
  }
}
