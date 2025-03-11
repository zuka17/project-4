import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-woltswagen-pay',
  imports: [RouterLink,ErrorComponent,ReactiveFormsModule],
  templateUrl: './woltswagen-pay.component.html',
  styleUrl: './woltswagen-pay.component.scss'
})
export class WoltswagenPayComponent {
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
