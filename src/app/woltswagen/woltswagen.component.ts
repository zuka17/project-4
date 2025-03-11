import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-woltswagen',
  imports: [RouterLink,],
  templateUrl: './woltswagen.component.html',
  styleUrl: './woltswagen.component.scss'
})
export class WoltswagenComponent {
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
