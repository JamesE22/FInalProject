import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Ionic standalone components
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  // Import components needed by this page
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton
  ]
})
export class HomePage {

  // Default recipes (used only if localStorage is empty)
  hardCodedRecipes: any[] = [
    {
      title: 'Spaghetti Bolognese',
      ingredients: 'Spaghetti, ground beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
      steps: '1. Cook spaghetti. 2. Sauté onions and garlic. 3. Add beef. 4. Add sauce.'
    },
    {
      title: 'Pancakes',
      ingredients: 'Flour, milk, eggs, sugar, baking powder, salt, butter',
      steps: '1. Mix ingredients. 2. Cook on skillet.'
    },
    {
      title: 'Caesar Salad',
      ingredients: 'Lettuce, croutons, parmesan, dressing',
      steps: '1. Chop lettuce. 2. Mix everything.'
    }
  ];

  // Recipes shown on the home page
  recipes: any[] = [];

  // Router used for page navigation
  constructor(private router: Router) {}

  // Runs every time page becomes active
  ionViewWillEnter() {

    // Get recipes from localStorage
    let storedRecipes = JSON.parse(
      localStorage.getItem('recipes') || '[]'
    );

    // If no stored recipes, use hard-coded ones
    if (storedRecipes.length === 0) {
      storedRecipes = [...this.hardCodedRecipes];
      localStorage.setItem(
        'recipes',
        JSON.stringify(storedRecipes)
      );
    }

    // Assign recipes to display
    this.recipes = storedRecipes;
  }

  // Navigate to recipe detail page
  openRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }

  // Navigate to add recipe page
  goAdd() {
    this.router.navigate(['/add']);
  }
}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

// Ionic standalone components
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  // Import components needed by this page
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonButton
  ]
})
export class HomePage {

  // Default recipes (used only if localStorage is empty)
  hardCodedRecipes: any[] = [
    {
      title: 'Spaghetti Bolognese',
      ingredients: 'Spaghetti, ground beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
      steps: '1. Cook spaghetti. 2. Sauté onions and garlic. 3. Add beef. 4. Add sauce.'
    },
    {
      title: 'Pancakes',
      ingredients: 'Flour, milk, eggs, sugar, baking powder, salt, butter',
      steps: '1. Mix ingredients. 2. Cook on skillet.'
    },
    {
      title: 'Caesar Salad',
      ingredients: 'Lettuce, croutons, parmesan, dressing',
      steps: '1. Chop lettuce. 2. Mix everything.'
    }
  ];

  // Recipes shown on the home page
  recipes: any[] = [];

  // Router used for page navigation
  constructor(private router: Router) {}

  // Runs every time page becomes active
  ionViewWillEnter() {

    // Get recipes from localStorage
    let storedRecipes = JSON.parse(
      localStorage.getItem('recipes') || '[]'
    );

    // If no stored recipes, use hard-coded ones
    if (storedRecipes.length === 0) {
      storedRecipes = [...this.hardCodedRecipes];
      localStorage.setItem(
        'recipes',
        JSON.stringify(storedRecipes)
      );
    }

    // Assign recipes to display
    this.recipes = storedRecipes;
  }

  // Navigate to recipe detail page
  openRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }

  // Navigate to add recipe page
  goAdd() {
    this.router.navigate(['/add']);
  }
}
