

export class Cloth {
  id: string;
  image: String;
  color: string[];
  kindCloth?: string[];
  typeOfItem: string[];
  seasons?: string[];


  constructor(id: string, image: String,
    color: string[], typeOfItem: string[], kindCloth?: string[],
    seasons?: string[], ) {
    this.id = id;
    this.image = image;
    this.color = color;
    this.kindCloth = kindCloth;
    this.typeOfItem = typeOfItem;
    this.seasons = seasons;
  }
}
