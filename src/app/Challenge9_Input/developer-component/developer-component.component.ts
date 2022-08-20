import { Component, OnInit } from "@angular/core";
import { Developer } from "../common/developer.model";
import { Skill } from "../common/skill.model";

@Component({
  selector: "app-developer-component",
  templateUrl: "./developer-component.component.html",
  styleUrls: ["./developer-component.component.css"],
})
export class DeveloperComponentComponent implements OnInit {
  public developerModel?: Developer;
  public skills?: Skill[];

  constructor() {}

  ngOnInit(): void {
    this.developerModel = new Developer(
      "Douetté",
      "Richard",
      34,
      "M",
      "bio1",
      (this.skills = [
        {
          name: "Javascript",
          logo: "logo1",
          site: "Www.monsite1.com",
        },
        {
          name: "Angular",
          logo: "logo1",
          site: "Www.monsite2.com",
        },
      ])
    );
  }
}
