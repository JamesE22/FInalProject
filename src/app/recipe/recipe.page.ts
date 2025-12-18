import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Ionic components
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-recipe',
  templateUrl: 'recipe.page.html',
  styleUrls: ['recipe.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonBackButton
  ]
})
export class RecipePage {

  // Selected recipe object
  recipe: any;

  // Index of recipe in array
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Load recipe when page opens
  ionViewWillEnter() {

    // Get stored recipes
    const storedRecipes = JSON.parse(
      localStorage.getItem('recipes') || '[]'
    );

    // Get recipe index from URL
    this.id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    // Assign recipe if exists
    this.recipe = storedRecipes[this.id] || null;
  }

  // Delete selected recipe
  delete() {

    if (!this.recipe) return;

    const storedRecipes = JSON.parse(
      localStorage.getItem('recipes') || '[]'
    );

    // Remove recipe by index
    storedRecipes.splice(this.id, 1);

    // Update storage
    localStorage.setItem(
      'recipes',
      JSON.stringify(storedRecipes)
    );

    // Navigate back to home
    this.router.navigate(['/home']);
  }
}
