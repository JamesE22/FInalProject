import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonInput, IonTextarea
} from '@ionic/angular/standalone';

import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-add',
  templateUrl: 'add.page.html',
  styleUrls: ['add.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonButton, IonInput, IonTextarea,
    FormsModule
  ]
})
export class AddPage {

  title = '';
  ingredients = '';
  steps = '';

  constructor(private router: Router) {}

  save() {
    const stored = JSON.parse(localStorage.getItem('recipes') || '[]');

    stored.push({
      title: this.title,
      ingredients: this.ingredients,
      steps: this.steps
    });

    localStorage.setItem('recipes', JSON.stringify(stored));
    this.router.navigate(['/']);
  }
}
