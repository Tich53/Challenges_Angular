import { Component, OnInit } from "@angular/core";
import { CocktailService } from "../cocktail.service";
import { Coktail } from "../Interfaces/coktail";

@Component({
  selector: "app-cocktail-list",
  templateUrl: "./cocktail-list.component.html",
  styleUrls: ["./cocktail-list.component.css"],
})
export class CocktailListComponent implements OnInit {
  public coktails?: Coktail[] = this.coktailService.getCocktails();

  constructor(private coktailService: CocktailService) {}

  ngOnInit(): void {}
}
