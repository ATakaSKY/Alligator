import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  template:`
  Time: {{ time$ | async | date:'mediumTime' }}
  <br>
  Cities :
    <ul>
      <li *ngFor="let city of cities$ | async">
        {{city.name}} : {{city.population}} : {{city.elevation}}
      </li>
    </ul>

    <br><br>
    <span *ngIf="(word$ | async)?.length > 9; else shortWord">
      Long word: {{ word$.value }}
    </span>

    <ng-template #shortWord>
      Short word: {{ word$.value }}
    </ng-template>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  time$ = Observable.interval(1000)
  .map(val => new Date());

  cities$ = Observable
    .of([
      {name: 'Los Angeles', population: '3.9 million', elevation: '233′'},
      {name: 'New York', population: '8,4 million', elevation: '33′'},
      {name: 'Chicago', population: '2.7 million', elevation: '594′'},
    ])
    .delay(1000);

    word$ = Observable.of('Abibliophobia');

}
