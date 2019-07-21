import { COLOR_CATEGORY, CLOTH_STYLE_CATEGORY, TYPE_ITEM_CATEGORY, SEASONS_CATEGORY } from '../catagories/catagories.component';


export class Cloth {
  id: string;
  image: String;
  color: COLOR_CATEGORY[];
  kindCloth?: CLOTH_STYLE_CATEGORY[];
  typeOfItem: TYPE_ITEM_CATEGORY[];
  seasons?: SEASONS_CATEGORY[];


  constructor(id: string, image: String,
    color: COLOR_CATEGORY[], typeOfItem: TYPE_ITEM_CATEGORY[], kindCloth?: CLOTH_STYLE_CATEGORY[],
    seasons?: SEASONS_CATEGORY[], ) {
    this.id = id;
    this.image = image;
    this.color = color;
    this.kindCloth = kindCloth;
    this.typeOfItem = typeOfItem;
    this.seasons = seasons;
  }
}
