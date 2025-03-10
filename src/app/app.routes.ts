import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { WoltswagenComponent } from './woltswagen/woltswagen.component';
import { FordComponent } from './ford/ford.component';
import { FastNisanComponent } from './fast-nisan/fast-nisan.component';
import { ComfortableBmwComponent } from './comfortable-bmw/comfortable-bmw.component';
import { WoltswagenPayComponent } from './woltswagen-pay/woltswagen-pay.component';
import { FordPayComponent } from './ford-pay/ford-pay.component';
import { NissanPayComponent } from './nissan-pay/nissan-pay.component';
import { BmwPayComponent } from './bmw-pay/bmw-pay.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-page',
    pathMatch: 'full',
  },
  {
    title: 'main-page',
    path: 'main-page',
    loadComponent: () =>
      import('./main-page/main-page.component').then((m) => MainPageComponent),
  },

  {
    title: 'Woltswagen',
    path: 'woltswagen',
    loadComponent: () =>
      import('./woltswagen/woltswagen.component').then(
        (m) => WoltswagenComponent
      ),
  },
  {
    title: 'ford',
    path: 'ford',
    loadComponent: () =>
      import('./ford/ford.component').then((m) => FordComponent),
  },
  {
    title: 'fast-nisan',
    path: 'fast-nisan',
    loadComponent: () =>
      import('./fast-nisan/fast-nisan.component').then(
        (m) => FastNisanComponent
      ),
  },
  {
    title: 'comfortable-bmw',
    path: 'comfortable-bmw',
    loadComponent: () =>
      import('./comfortable-bmw/comfortable-bmw.component').then(
        (m) => ComfortableBmwComponent
      ),
  },
  {
    title: 'woltswagen-pay',
    path: 'woltswagen-pay',
    loadComponent: () =>
      import('./woltswagen-pay/woltswagen-pay.component').then(
        (m) => WoltswagenPayComponent
      ),
  },
  {
    title: 'ford-pay',
    path: 'ford-pay',
    loadComponent: () =>
      import('./ford-pay/ford-pay.component').then((m) => FordPayComponent),
  },
  {
    title: 'nissan-pay',
    path: 'nissan-pay',
    loadComponent: () => import('./nissan-pay/nissan-pay.component').then((m)=> NissanPayComponent),
  },
    {
        title: 'bmw-pay',
        path: 'bmw-pay',
        loadComponent:()=> import('./bmw-pay/bmw-pay.component').then((m) => BmwPayComponent)
  },
  {
    path: '**',
    redirectTo: 'main-page',
  },
];
