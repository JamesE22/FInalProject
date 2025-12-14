import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonList, IonItem, IonLabel, IonButton
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, CommonModule,
    IonList, IonItem, IonLabel, IonButton
  ]
})
export class HomePage {


  hardCodedRecipes: any[] = [
    {
      title: 'Spaghetti Bolognese',
      ingredients: 'Spaghetti, ground beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
      steps: '1. Cook spaghetti. 2. Sauté onions and garlic. 3. Add beef and cook. 4. Add tomato sauce. 5. Mix with spaghetti.'
    },
    {
      title: 'Pancakes',
      ingredients: 'Flour, milk, eggs, sugar, baking powder, salt, butter',
      steps: '1. Mix dry ingredients. 2. Add milk and eggs. 3. Stir to smooth batter. 4. Cook on skillet until golden.'
    },
    {
      title: 'Caesar Salad',
      ingredients: 'Romaine lettuce, croutons, parmesan cheese, Caesar dressing, chicken (optional)',
      steps: '1. Chop lettuce. 2. Add croutons and cheese. 3. Toss with dressing. 4. Add grilled chicken if desired.'
    }
  ];

  recipes: any[] = [];

  constructor(private router: Router) {}

  ionViewWillEnter() {
    // Load recipes from localStorage or initialize with hard-coded recipes
    let storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    if (storedRecipes.length === 0) {
      storedRecipes = [...this.hardCodedRecipes];
      localStorage.setItem('recipes', JSON.stringify(storedRecipes));
    }
    this.recipes = storedRecipes;
  }

  openRecipe(index: number) {
    this.router.navigate(['/recipe', index]);
  }

  goAdd() {
    this.router.navigate(['/add']);
  }
}
