import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonInput,
  IonTextarea,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-add',
  templateUrl: 'add.page.html',
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonInput,
    IonTextarea,
    IonButtons,
    IonBackButton
  ]
})
export class AddPage {

  title = '';
  ingredients = '';
  steps = '';

  hardCodedRecipes: { title: string }[] = [
    { title: 'Spaghetti Bolognese' },
    { title: 'Pancakes' },
    { title: 'Caesar Salad' }
  ];

  constructor(private router: Router) {}

  save() {
    if (!this.title || !this.ingredients || !this.steps) {
      alert('Please fill all fields before saving!');
      return;
    }

    const duplicate = this.hardCodedRecipes.find((r: { title: string }) =>
      r.title.toLowerCase() === this.title.trim().toLowerCase()
    );

    if (duplicate) {
      alert('A recipe with this title already exists. Please choose a different title.');
      return;
    }

    const stored: { title: string; ingredients: string; steps: string }[] = JSON.parse(localStorage.getItem('recipes') || '[]');

    const userDuplicate = stored.find((r: { title: string }) =>
      r.title.toLowerCase() === this.title.trim().toLowerCase()
    );

    if (userDuplicate) {
      alert('You already added a recipe with this title. Please choose a different title.');
      return;
    }

    stored.push({
      title: this.title.trim(),
      ingredients: this.ingredients.trim(),
      steps: this.steps.trim()
    });

    localStorage.setItem('recipes', JSON.stringify(stored));
    this.router.navigate(['/home']);
  }
}
