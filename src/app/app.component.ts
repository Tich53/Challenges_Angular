import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Richard";

  isThisIngredientVital: boolean = true;

  displayGuestList = false;

  songList: string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];

  onomatopoeias?: string[] = ["bim", "bam", "boum"];

  onReceiveNewOnomatopia(inputValue: string) {
    this.onomatopoeias?.push(inputValue);
  }
}
