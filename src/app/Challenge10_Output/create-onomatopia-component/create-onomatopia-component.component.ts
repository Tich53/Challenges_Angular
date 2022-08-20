import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-create-onomatopia-component",
  templateUrl: "./create-onomatopia-component.component.html",
  styleUrls: ["./create-onomatopia-component.component.css"],
})
export class CreateOnomatopiaComponentComponent implements OnInit {
  public newOnomatopia?: string;
  @Output() sendOnomatopiaToParent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  createOnomatopia(inputValue: string): void {
    this.sendOnomatopiaToParent.emit(inputValue);
  }
}
