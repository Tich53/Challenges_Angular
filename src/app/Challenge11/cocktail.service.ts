import { Injectable } from "@angular/core";
import { Coktail } from "./Interfaces/coktail";

@Injectable({
  providedIn: "root",
})
export class CocktailService {
  public coktails: Coktail[] = [
    {
      name: "mojito",
      price: 8,
      img: "www.mojito.com",
    },
    {
      name: "spritz",
      price: 9,
      img: "www.spritz.com",
    },
  ];
  constructor() {}

  getCocktails(): Coktail[] {
    return this.coktails;
  }
}
