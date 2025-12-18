import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Ionic components
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

  // Required imports for template
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

  // Form fields
  title = '';
  ingredients = '';
  steps = '';

  // Used to prevent duplicates from default recipes
  hardCodedRecipes = [
    { title: 'Spaghetti Bolognese' },
    { title: 'Pancakes' },
    { title: 'Caesar Salad' }
  ];

  constructor(private router: Router) {}

  // Save recipe to localStorage
  save() {

    // Check if any field is empty
    if (!this.title || !this.ingredients || !this.steps) {
      alert('Please fill all fields before saving!');
      return;
    }

    // Check duplicate against hard-coded recipes
    const duplicate = this.hardCodedRecipes.find(
      r => r.title.toLowerCase() === this.title.trim().toLowerCase()
    );

    if (duplicate) {
      alert('Recipe already exists.');
      return;
    }

    // Get stored recipes
    const stored = JSON.parse(
      localStorage.getItem('recipes') || '[]'
    );

    // Check duplicate against user-added recipes
    const userDuplicate = stored.find(
      (r: any) =>
        r.title.toLowerCase() === this.title.trim().toLowerCase()
    );

    if (userDuplicate) {
      alert('You already added this recipe.');
      return;
    }

    // Add new recipe
    stored.push({
      title: this.title.trim(),
      ingredients: this.ingredients.trim(),
      steps: this.steps.trim()
    });

    // Save to localStorage
    localStorage.setItem('recipes', JSON.stringify(stored));

    // Go back to home page
    this.router.navigate(['/home']);
  }
}
