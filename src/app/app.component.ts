import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  foods = ['Bacon', 'Lettuce', 'Tomatoes'];

  addFood(food) {
    this.foods.push(food);
  }
}
