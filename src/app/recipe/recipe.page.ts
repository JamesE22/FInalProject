import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';

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
  recipe: any;
  id: number = 0;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ionViewWillEnter() {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    if (storedRecipes[this.id]) {
      this.recipe = storedRecipes[this.id];
    } else {
      this.recipe = null;
    }
  }

  delete() {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');

    if (!this.recipe) return;

    storedRecipes.splice(this.id, 1);
    localStorage.setItem('recipes', JSON.stringify(storedRecipes));
    this.router.navigate(['/home']);
  }
}
