import {Component, inject} from '@angular/core';
import {HeroesJsonApi} from '../../services/heroes-json-api';
import {RouterLink} from '@angular/router';
import {Hero} from '../../models/hero-api';

@Component({
  selector: 'app-heroes',
  imports: [
    RouterLink
  ],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {
  heroes?:Hero[]
  private readonly heroesJsonApi:HeroesJsonApi = inject(HeroesJsonApi);

  ngOnInit(){
    this.heroesJsonApi.getHeroes().subscribe({
      next: data =>{
        console.log(data)
        this.heroes = data.heroes
      },
      error: error => console.error(error)
    })
  }

}
