import { CATEGORIES, COLOR_CATEGORY, KIND_CLOTH_CATEGORY, TYPE_ITEM_CATEGORY, SEASONS_CATEGORY } from '../catagories/catagories.component';


export class Cloth{
  id:String;
  name: String;
  image:String;
  categories?: CATEGORIES[];
  description:String;
  color:COLOR_CATEGORY[];
  kindCloth?:KIND_CLOTH_CATEGORY[];
  typeOfItem : TYPE_ITEM_CATEGORY[];
  seasons?:SEASONS_CATEGORY[];


  constructor( id:String,name: String, image:String ,category:CATEGORIES[],description:String,
    color:COLOR_CATEGORY[], typeOfItem : TYPE_ITEM_CATEGORY[],kindCloth?:KIND_CLOTH_CATEGORY[],
     seasons?:SEASONS_CATEGORY[],)
  {
      this.id=id;
      this. name=name;
      this.image= image;
      this.categories=category;
      this.description=description;
      this.color=color;
      this.kindCloth=kindCloth;
      this.typeOfItem=typeOfItem;
      this.seasons=seasons;
  }
}
