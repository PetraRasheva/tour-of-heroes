import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { WizardService } from '../wizard.service';
import { WizardComponent } from '../wizard/wizard.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    //router , in method .navigate
    private router: Router,
    private heroService: HeroService,
    public wizardService: WizardService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  onDelete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }

  openDetails(hero: Hero): void {
    const url = `detail/${hero.id}`;
    this.router.navigateByUrl(url)
  }
}