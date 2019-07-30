export class imageProccessingOutput {
  color:      Color;
  tags:       Tag[];
 requestId:  string;
  metadata:   Metadata;
  description: Description;

}

export interface Color {
  dominantColorForeground: string;
  dominantColorBackground: string;
  dominantColors:          string[];
  accentColor:             string;
  isBwImg:                 boolean;
  isBWImg:                 boolean;
}

export interface Metadata {
  width:  number;
  height: number;
  format: string;
}

export interface Tag {
  name:       string;
  confidence: number;
}

export interface Description {
  tags:     string[];
  captions: Caption[];
}

export interface Caption {
  text:       string;
  confidence: number;
}

///////observerable pipe return imageProccessingMinOutput/////////note:need to be in a new file
export class imageProccessingMinOutput{
color: ColorMin;
tags: Tag[];
description: Description;
//not from server - Calculation fields
clothColor:string;
clothCatgory:string[];

constructor(color: Color, tags: Tag[], description: Description) {
      this.color = { dominantColorForeground: color.dominantColorForeground,
        dominantColorBackground:color.dominantColorBackground,
        dominantColors: color.dominantColors,
      };
      this.tags=tags;
      this.description=description;
      this.clothColor = this.color.dominantColorForeground;
      this.clothCatgory=this.getClothCatgory(this.tags,this.description);

  }

  //most confidence Catgory
  getClothCatgory(tags:Tag[],description:Description):string[]{
    var filteredTag:Tag[]=this.getFilteredTags(tags,description);
    var descriptionText:Caption=description.captions[0];
    console.log(`description text: ${descriptionText.text}
                 confidence:${descriptionText.confidence}`);
    // get getClothCatgory from description text or tags by confidence
    var textArray:string[]=descriptionText.text.split(" ");
    //tag in text
    var TextTags:string[]=filteredTag.filter(tag=>textArray.includes(tag.name)).map(tag=>tag.name);

   return (  !!TextTags && descriptionText.confidence > filteredTag[0].confidence ?
                                                TextTags :  [filteredTag[0].name]);

  }

  //remove tag with confidence blow 0.4 and unnesccery word
  getFilteredTags(tags:Tag[],description:Description):Tag[]{
    var removeWord:string[] = ["person","wearing","fabric","fashion","tan","clothing","outerwear"];
    //var importantTag:string[] = ["skirt","dress","sweater","hoodie","t-shirt","coat","shirt","jacket"];//serch the first important word
    //var typCloth:string[]=["casual dress"];

    console.log("tags befor filter: " + tags.map(tag=>tag.name +" "+tag.confidence).join(","));
    //return word exist also in array description.tags  (description.tags && tags)
   //remove tag with confidence blow 0.4 and unnesccery word
    tags=tags.filter(tag=>/*tag.confidence > 0.5 && */  !removeWord.includes(tag.name) &&
                                     description.tags.includes(tag.name) );

    console.log("tags after join: "+this.tags);
    return tags;
  }

}

export interface ColorMin {
dominantColorForeground: string;
dominantColorBackground: string;
dominantColors: string[];
}
