import { Component, Input, OnInit } from "@angular/core";
import { Skill } from "../common/skill.model";

@Component({
  selector: "app-skill-component",
  templateUrl: "./skill-component.component.html",
  styleUrls: ["./skill-component.component.css"],
})
export class SkillComponentComponent implements OnInit {
  @Input() mySkill?: Skill;

  constructor() {}

  ngOnInit(): void {}
}
