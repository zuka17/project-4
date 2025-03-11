import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BmwPayComponent } from '../bmw-pay/bmw-pay.component';
import { ErrorComponent } from '../error/error.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-ford-pay',
  imports: [RouterLink, ErrorComponent, ReactiveFormsModule],
  templateUrl: './ford-pay.component.html',
  styleUrl: './ford-pay.component.scss',
})
export class FordPayComponent {
  public payForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });
  public get firstnameControl(): FormControl {
    return this.payForm.get('firstname') as FormControl;
  }
  public get lastnameControl(): FormControl {
    return this.payForm.get('lastname') as FormControl;
  }
  public get emailControl(): FormControl {
    return this.payForm.get('email') as FormControl;
  }
}
