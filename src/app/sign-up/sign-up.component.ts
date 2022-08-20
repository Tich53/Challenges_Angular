import { Component, OnInit } from '@angular/core';
import { User } from '../user'


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  modelUser: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit(){ this.submitted = true }

}
