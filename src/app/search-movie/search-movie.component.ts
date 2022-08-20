import { formatDate } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-search-movie",
  templateUrl: "./search-movie.component.html",
  styleUrls: ["./search-movie.component.css"],
})
export class SearchMovieComponent implements OnInit {
  searchMovieForm = this.formBuilder.group({
    movie: this.formBuilder.group(
      {
        id: [""],
        title: [""],
      },
      { Validators: this.isRequiredValidator("id", "title") }
    ),
    type: this.formBuilder.group({
      film: [""],
      serie: [""],
      épisode: [""],
    }),
    release_date: ["", Validators.required],
    fiche: this.formBuilder.group({
      complete: [""],
      courte: [""],
    }),
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /*     this.searchMovieForm.patchValue({
      fiche: "courte",
    }); */
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("ca marche");
  }

  isRequiredValidator(controlName1: any, controlName2: any): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Get first control value
      const value1 = control.get(controlName1)?.value;
      // Get second control value
      const value2 = control.get(controlName2)?.value;

      if (!value1 && !value2) {
        return { empty: { value1, value2 } };
      } else {
        return null;
      }
    };
  }

  /*   rangeDateValidator(control: AbstractControl): ValidationErrors | null {
    const isValid = control.value(formatDate(Date, "yyyy")) > 1900;
  } */
}
